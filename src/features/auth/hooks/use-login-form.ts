import { useForm } from 'react-hook-form'
import { LoginDto } from '../types'

const useLoginForm = () => {
  const form = useForm<LoginDto>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return form
}
export { useLoginForm }
