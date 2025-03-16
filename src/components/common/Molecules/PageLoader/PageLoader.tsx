import { Loader2 } from 'lucide-react'
import React from 'react'

export interface PageLoaderProps {
  message?: string
}

const PageLoader: React.FC<PageLoaderProps> = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    </div>
  )
}

export { PageLoader }
