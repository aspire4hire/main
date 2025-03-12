import { LoadingContainer, Skeleton } from '@/components'
import { cn } from '@/utils'
import React from 'react'

export const JobLoadingPage = () => {
  return (
    <LoadingContainer navigationBar={true}>
      <div className="mt-12 flex flex-col items-center justify-center gap-3">
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-6 w-72" />
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-10 w-56" />
      </div>
      <div className="mt-6 space-y-3">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-5 w-48" />
      </div>
      <div className="mt-8 flex flex-col gap-1">
        <Skeleton className="h-5 w-48" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i}
              className={cn('h-5', i % 2 === 0 ? 'w-44' : 'w-32')}
            />
          ))}
        </div>
      </div>
      <div className="my-4 h-[2px] w-full bg-gray-200"></div>
      <div className="mt-8 space-y-8">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </LoadingContainer>
  )
}
