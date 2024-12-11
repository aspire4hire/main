import { useForm } from 'react-hook-form'
import { SignUpLoginDto } from '../types'

const useSignUpForm = () => {
  const form = useForm<
    SignUpLoginDto & {
      confirmPassword: string
    }
  >({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  return form
}
export { useSignUpForm }
