'use client'

import React, { useEffect, useState } from 'react'

type FileLoaderWrapperProps = {
  children: React.ReactNode
}

export const FileLoaderWrapper = ({ children }: FileLoaderWrapperProps) => {
  const [loadingPorcentage, setLoadingPorcentage] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setLoadingPorcentage(prev => prev + 1)
    }, 15)
  }, [])

  if (loadingPorcentage <= 100) {
    return (
      <div className="my-3 h-2 w-full max-w-28 overflow-hidden rounded-full bg-tertiary/10">
        <div
          className="h-2 bg-tertiary/90"
          style={{
            width: `${loadingPorcentage}%`
          }}
        ></div>
      </div>
    )
  }

  return <>{children}</>
}
