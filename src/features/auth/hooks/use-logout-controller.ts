import { useState } from 'react'
import { toast } from 'sonner'
import { getLogout } from '../actions'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants'

const useLoguotController = () => {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleLogOut = async () => {
    setIsLoading(true)
    const response = await getLogout()
    if (response.error) {
      console.error(response.error)
      toast.error('Unable to logout, please try again', {
        position: 'bottom-center'
      })
      setIsLoading(false)
      return
    }
    router.push(ROUTES.LOGIN)
  }

  return {
    isLoading,
    handleLogOut
  }
}

export { useLoguotController }
