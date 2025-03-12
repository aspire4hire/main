import { LoadingContainer, Skeleton } from '@/components'

export default function Loading() {
  return (
    <LoadingContainer formButton>
      <div className="mt-9 flex justify-center">
        <Skeleton className="h-6 w-44" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-5 w-36" />
      </div>
      <div className="mt-8 flex flex-col gap-12">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-32 w-56" />
          <Skeleton className="h-9 w-32" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </LoadingContainer>
  )
}
