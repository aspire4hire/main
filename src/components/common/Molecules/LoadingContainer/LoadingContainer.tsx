import React from 'react'
import { Skeleton } from '../../Atoms'

type LoadingContainerProps = {
  children: React.ReactNode
  formButton?: boolean
  navigationBar?: boolean
}

export const LoadingContainer = ({
  children,
  formButton = false,
  navigationBar
}: LoadingContainerProps) => {
  return (
    <div className="flex h-[100dvh] flex-col justify-between">
      <section className="mx-auto h-full max-h-full w-full max-w-lg overflow-hidden px-3 md:px-0">
        {children}
      </section>
      {formButton && (
        <Skeleton className="mx-auto h-20 w-full max-w-lg rounded-t-lg" />
      )}
      {navigationBar && <Skeleton className="mx-auto h-20 w-full max-w-lg" />}
    </div>
  )
}
