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
  Profile
} from '../types'

type IOnboardingFormContext = {
  handleSubmit: (data: OnboardingFormDto) => void
  form: UseFormReturn<OnboardingFormDto>
  handleChangeStep: (step: StepPositionEnum) => void
  stepPosition: StepPositionEnum
  skillTrades: SkillTrade[]
  provinces: Province[]
  credentials: Credential[]
  isEditing: boolean
}

const OnboardingFormContext = createContext<IOnboardingFormContext>(undefined!)

const OnboardingFormProvider = ({
  onSubmit,
  children,
  skillTrades,
  provinces,
  credentials,
  isEditing,
  data
}: {
  children: ReactNode
  onSubmit: (data: OnboardingFormDto) => void
  skillTrades: SkillTrade[]
  provinces: Province[]
  credentials: Credential[]
  isEditing: boolean
  data?: Profile | null
}) => {
  const [stepPosition, setStepPosition] = useState<StepPositionEnum>(
    isEditing ? StepPositionEnum.BASIC_INFORMATION : StepPositionEnum.USER_TYPE
  )

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
    if (data) {
      onboardingForm.reset({
        first_name: data.first_name,
        last_name: data.last_name,
        bio: data.bio || undefined,
        city_name: data.city_name,
        province_id: data.province_id,
        is_employer: data.is_employer
      })
    }
  }, [data])

  const handleSubmit = (data: OnboardingFormDto) => {
    onSubmit(data)
  }

  const state: IOnboardingFormContext = {
    handleSubmit,
    form: onboardingForm,
    handleChangeStep,
    stepPosition,
    skillTrades,
    provinces,
    credentials,
    isEditing
  }

  return (
    <OnboardingFormContext.Provider value={state}>
      {children}
    </OnboardingFormContext.Provider>
  )
}

const useOnboardingFormContext = () => useContext(OnboardingFormContext)

export { OnboardingFormProvider, useOnboardingFormContext }
