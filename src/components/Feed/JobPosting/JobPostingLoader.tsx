import { Skeleton } from '@/components/common'
import React from 'react'

export const JobPostingLoader = () => {
  return (
    <article className="w-full space-y-3 rounded-lg border border-tertiary/5 bg-[#F1F1F1] px-3 py-3 shadow-md">
      <Skeleton className="h-4 w-24" />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="mb-3 flex items-center gap-1">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-5 w-28" />
          </div>
          <Skeleton className="mb-3 h-5 w-52" />
          <Skeleton className="mb-1.5 h-3.5 w-[91%]" />
          <Skeleton className="mb-1.5 h-3.5 w-[90%]" />
          <Skeleton className="mb-1.5 h-3.5 w-[60%]" />
        </div>
        <div className="col-span-1 flex justify-end">
          <Skeleton className="h-[168px] w-32" />
        </div>
      </div>
      <Skeleton className="h-5 w-48" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-52" />
      </div>
    </article>
  )
}
