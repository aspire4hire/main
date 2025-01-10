import { Skeleton } from '@/components'
import { cn } from '@/utils'
import React from 'react'

export const FiltersLoader = () => {
  return (
    <div>
      <div className="flex w-full justify-center">
        <Skeleton className="mb-5 h-6 w-44" />
      </div>
      <Skeleton className="mb-5 h-4 w-20" />
      <div className="space-y-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-4 w-28" />
            </div>
            <Skeleton className="h-8 w-10" />
          </div>
        ))}
      </div>
      <Skeleton className="mb-5 mt-8 h-4 w-20" />
      <Skeleton className="mb-3 h-4 w-14" />
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex items-center gap-1" key={index}>
            <Skeleton className="h-7 w-7" />
            <Skeleton
              className={cn('h-4', index % 3 === 0 ? 'w-32' : 'w-40')}
            />
          </div>
        ))}
      </div>
      <Skeleton className="my-1 h-1 w-full" />
      <div className="flex w-full justify-end">
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="mb-5 mt-8 h-4 w-20" />
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex items-center gap-1" key={index}>
            <Skeleton className="h-7 w-7" />
            <Skeleton
              className={cn('h-4', index % 3 === 0 ? 'w-32' : 'w-40')}
            />
          </div>
        ))}
      </div>
      <Skeleton className="my-1 h-1 w-full" />
      <div className="flex w-full justify-end">
        <Skeleton className="h-5 w-16" />
      </div>
    </div>
  )
}
