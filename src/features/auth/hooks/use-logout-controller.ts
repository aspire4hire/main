import { useState } from 'react'
import { toast } from 'sonner'
import { getLogout } from '../actions'

const useLoguotController = () => {
  const [isLoading, setIsLoading] = useState(false)

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
    location.reload()
  }

  return {
    isLoading,
    handleLogOut
  }
}

export { useLoguotController }
