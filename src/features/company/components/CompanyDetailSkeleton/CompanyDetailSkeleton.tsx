import { Skeleton } from '@/components'
import { JobPostSkeleton } from '@/features/jobs/components'
import React from 'react'

export const CompanyDetailSkeleton = () => {
  return (
    <div className="">
      <div className="mt-12 flex flex-col items-center justify-center gap-3">
        <Skeleton className="h-8 w-52" />
      </div>
      <div className="mt-6 flex gap-2">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-5 w-48" />
      </div>
      <div className="my-6 flex justify-center">
        <Skeleton className="h-10 w-48" />
      </div>
      <div className="mt-3 flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <JobPostSkeleton key={index} isCompanyView />
        ))}
      </div>
    </div>
  )
}
