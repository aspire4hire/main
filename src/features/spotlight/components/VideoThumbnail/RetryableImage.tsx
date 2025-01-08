'use client'

import React, { useState } from 'react'

interface RetryableImageProps {
  src: string
  alt: string
  maxRetries?: number
  retryInterval?: number
  onErrorFallback?: React.ReactNode // Elemento para mostrar si falla después de reintentos
  className?: HTMLElement['className']
}

const RetryableImage: React.FC<RetryableImageProps> = ({
  src,
  alt,
  maxRetries = 3,
  retryInterval = 2000,
  onErrorFallback,
  className
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src)
  const [retries, setRetries] = useState<number>(0)
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    if (retries < maxRetries) {
      setTimeout(() => {
        setCurrentSrc(`${src}&${Date.now()}`) // Evita el uso de caché
        setRetries(prevRetries => prevRetries + 1)
      }, retryInterval)
    } else {
      setError(true)
      console.log(`Image failed to load after ${maxRetries} retries.`)
    }
  }

  return (
    <>
      {isLoading && <div className={className + 'animate-bounce'}></div>}
      <img
        src={currentSrc}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={handleImageError}
        className={className + `${isLoading ? ' hidden' : ''}`}
      />
    </>
  )
}

export default RetryableImage
