'use client'

import {
  AppLayout,
  ArrowRightIcon,
  Button,
  IconSizeEnum,
  PageLoader,
  Typography
} from '@/components'
import { ROUTES } from '@/constants'
import { useLoguotController } from '@/features/auth/hooks'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Settings() {
  const { handleLogOut, isLoading } = useLoguotController()

  const router = useRouter()

  if (isLoading) return <PageLoader />

  return (
    <AppLayout hideBottomBar>
      <Typography variant="h5" align="center" className="mb-5 w-full">
        Settings
      </Typography>
      <div className="flex flex-col gap-4">
        <Button
          variant={'outline'}
          className="flex justify-between bg-tertiary/20"
          onClick={() => router.push(ROUTES.CHANGE_EMAIL)}
        >
          <Typography className="ml-0 w-full text-left font-bold">
            Change Email
          </Typography>
          <ArrowRightIcon size={IconSizeEnum.SM} />
        </Button>
        <Button
          variant={'outline'}
          className="flex justify-between bg-tertiary/20"
          onClick={() => router.push(ROUTES.CHANGE_PASSWORD)}
        >
          <Typography className="ml-0 w-full text-left font-bold">
            Change Password
          </Typography>
          <ArrowRightIcon size={IconSizeEnum.SM} />
        </Button>
      </div>
      <div className="mt-8 flex w-full justify-center">
        <Button
          variant={'outline'}
          className="border-2 border-destructive font-bold text-destructive"
          rounded
          size={'xl'}
          onClick={handleLogOut}
        >
          <LogOut className="text-bold !h-5 !w-5" />
          Logout
        </Button>
      </div>
    </AppLayout>
  )
}
