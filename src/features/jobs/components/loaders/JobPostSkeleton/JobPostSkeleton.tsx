import { Skeleton } from '@/components'
import React from 'react'

type JobPostSkeletonProps = {
  isCompanyView?: boolean
}

export const JobPostSkeleton = ({
  isCompanyView = false
}: JobPostSkeletonProps) => {
  return (
    <article className="w-full space-y-3 rounded-lg border border-tertiary/5 bg-[#F1F1F1] px-3 py-3 shadow-md">
      {isCompanyView ? (
        <div className="flex justify-between">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-8" />
        </div>
      ) : (
        <div className="flex gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-5 w-28" />
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-6 w-72" />
          <Skeleton className="h-3 w-32" />
        </div>
        <Skeleton className="h-12 w-10" />
      </div>
      <div className="flex justify-between pt-2">
        <Skeleton className="h-4 w-48" />
        {isCompanyView && <Skeleton className="h-4 w-24" />}
      </div>
    </article>
  )
}
