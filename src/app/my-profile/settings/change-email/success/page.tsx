'use client'

import { Button, FormContainer, Typography } from '@/components'
import { ROUTES } from '@/constants'
import { CircleCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function SuccessPassword() {
  const router = useRouter()
  return (
    <FormContainer className="bg-tertiary/10">
      <div className="flex h-full flex-col justify-center">
        <div className="flex flex-col items-center gap-5 rounded-2xl bg-white py-7 shadow-2xl">
          <CircleCheck className="mx-auto h-28 w-28 text-secondary" />
          <div>
            <Typography
              variant="h2"
              className="mb-0 w-full text-center font-bold"
            >
              EMAIL <br /> UPDATE
            </Typography>
            <Typography className="text-tertiary">
              Your email has been successfully updated
            </Typography>
          </div>
          <Button
            onClick={() => router.push(ROUTES.MY_PROFILE)}
            type="button"
            size={'xl'}
            className="mx-auto w-fit"
          >
            Continue
          </Button>
        </div>
      </div>
    </FormContainer>
  )
}
