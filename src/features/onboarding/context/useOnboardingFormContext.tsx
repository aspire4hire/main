/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useContext, useState } from 'react'
import { useForm, UseFormReturn } from 'react-hook-form'
import {
  OnboardingFormDto,
  Province,
  SkillTrade,
  StepPositionEnum,
  Credential
} from '../types'

type IOnboardingFormContext = {
  handleSubmit: () => void
  form: UseFormReturn<OnboardingFormDto>
  handleChangeStep: (step: StepPositionEnum) => void
  stepPosition: StepPositionEnum
  skillTrades: SkillTrade[]
  provinces: Province[]
  credentials: Credential[]
}

const OnboardingFormContext = createContext<IOnboardingFormContext>(undefined!)

const OnboardingFormProvider = ({
  onSubmit,
  children,
  skillTrades,
  provinces,
  credentials
}: {
  children: ReactNode
  onSubmit: () => void
  skillTrades: SkillTrade[]
  provinces: Province[]
  credentials: Credential[]
}) => {
  const [stepPosition, setStepPosition] = useState<StepPositionEnum>(
    StepPositionEnum.USER_TYPE
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

  const handleSubmit = () => {
    onSubmit()
  }

  const state: IOnboardingFormContext = {
    handleSubmit,
    form: onboardingForm,
    handleChangeStep,
    stepPosition,
    skillTrades,
    provinces,
    credentials
  }

  return (
    <OnboardingFormContext.Provider value={state}>
      {children}
    </OnboardingFormContext.Provider>
  )
}

const useOnboardingFormContext = () => useContext(OnboardingFormContext)

export { OnboardingFormProvider, useOnboardingFormContext }
