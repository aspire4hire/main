/* eslint-disable no-unused-vars */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import {
  OnboardingFormDto,
  Province,
  SkillTrade,
  StepPositionEnum,
  Credential,
  Profile,
  EditProfileTabEnum
} from '../types'
import { Company } from '@/features/company'

type SubmitFunctionParams = {
  callback?: () => void
  redirect?: boolean
  setLoadingAsFalse?: boolean
}

type OnBoardingSubmitType = (
  data: OnboardingFormDto,
  options?: SubmitFunctionParams
) => void

type EditCompanySubmitType = (
  company: Partial<Company>,
  callback?: () => void
) => void

type IOnboardingFormContext = {
  handleSubmit: (data: OnboardingFormDto) => void
  form: UseFormReturn<OnboardingFormDto>
  handleChangeStep: (step: StepPositionEnum) => void
  stepPosition: StepPositionEnum
  skillTrades: SkillTrade[]
  provinces: Province[]
  credentials: Credential[]
  isEditing: boolean
  currentEditProfileTabs: EditProfileTabEnum
  handleChangeTab: (tab: EditProfileTabEnum) => void
  isCompany?: boolean
}

const OnboardingFormContext = createContext<IOnboardingFormContext>(undefined!)

const OnboardingFormProvider = ({
  onSubmit,
  children,
  skillTrades,
  provinces,
  credentials,
  isEditing,
  data,
  company,
  isCompany
}: {
  children: ReactNode
  onSubmit: OnBoardingSubmitType | EditCompanySubmitType
  skillTrades: SkillTrade[]
  provinces: Province[]
  credentials: Credential[]
  isEditing: boolean
  data?: Profile | null
  company?: Company
  isCompany?: boolean
}) => {
  const getInitialStepPosition = () => {
    if (isEditing) {
      return StepPositionEnum.BASIC_INFORMATION
    }

    if (typeof data?.is_employer !== 'boolean')
      return StepPositionEnum.USER_TYPE
    else if (!data?.first_name) return StepPositionEnum.BASIC_INFORMATION
    else return StepPositionEnum.DETAILED_INFORMATION
  }

  const [stepPosition, setStepPosition] = useState<StepPositionEnum>(
    getInitialStepPosition()
  )

  const [currentEditProfileTabs, SetCurrentEditProfileTabs] =
    useState<EditProfileTabEnum>(EditProfileTabEnum.BASIC_INFORMATION)

  const handleChangeStep = (step: StepPositionEnum) => {
    setStepPosition(step)
  }

  const onboardingForm = useForm<OnboardingFormDto>({
    mode: 'onTouched',
    defaultValues: {
      city_name: '',
      first_name: '',
      skilled_trades: []
    }
  })

  useEffect(() => {
    if (data || company) {
      onboardingForm.reset({
        first_name: data?.first_name,
        last_name: data?.last_name,
        bio: data?.bio || undefined,
        city_name: data?.city_name,
        province_id: data?.province_id,
        profile_pic: data?.profile_pic as string,
        resume_url: data?.resume_url as string,
        is_employer: data?.is_employer,
        skilled_trades: (data?.skilled_trades || []).map(
          skillTrade => skillTrade.id
        ),
        credentials: (data?.credentials || []).map(credential => credential.id),
        ...(isCompany && {
          id: company?.id,
          address: company?.address,
          description: company?.description,
          logo_url: company?.logo_url,
          name: company?.name,
          website_url: company?.website_url,
          why_work_with_us: company?.why_work_with_us
        })
      })
    }
  }, [data, company, isCompany])

  const handleSubmit = (data: OnboardingFormDto) => {
    let options = {}
    if (!isEditing) {
      if (stepPosition === StepPositionEnum.USER_TYPE) {
        options = {
          redirect: false,
          callback: () => setStepPosition(StepPositionEnum.BASIC_INFORMATION),
          setLoadingAsFalse: true
        }
      } else if (stepPosition === StepPositionEnum.BASIC_INFORMATION) {
        options = {
          redirect: false,
          callback: () =>
            setStepPosition(StepPositionEnum.DETAILED_INFORMATION),
          setLoadingAsFalse: true
        }
      } else {
        options = {
          redirect: true
        }
      }
    } else if (
      isEditing &&
      stepPosition === StepPositionEnum.BASIC_INFORMATION
    ) {
      options = { ...options, showVideo: false }
    }

    const dataUpdated = StepPositionEnum.DETAILED_INFORMATION
      ? { ...data, is_profile_complete: true }
      : data

    if (!isCompany) {
      const onSubmitData = onSubmit as OnBoardingSubmitType

      onSubmitData(dataUpdated, options)
    } else {
      const onSubmitData = onSubmit as EditCompanySubmitType

      onSubmitData(dataUpdated as Partial<Company>)
    }
  }

  const handleChangeTab = (tab: EditProfileTabEnum) => {
    SetCurrentEditProfileTabs(tab)
  }

  const state: IOnboardingFormContext = {
    handleSubmit,
    form: onboardingForm,
    handleChangeStep,
    stepPosition,
    skillTrades,
    provinces,
    credentials,
    isEditing,
    handleChangeTab,
    currentEditProfileTabs,
    isCompany
  }

  return (
    <OnboardingFormContext.Provider value={state}>
      {children}
    </OnboardingFormContext.Provider>
  )
}

const useOnboardingFormContext = () => useContext(OnboardingFormContext)

export { OnboardingFormProvider, useOnboardingFormContext }
