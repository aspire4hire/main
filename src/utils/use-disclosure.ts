'use client'

import { useState, useCallback } from 'react'

interface UseDisclosureOptions<T> {
  defaultIsOpen?: boolean
  initialData?: T | null
}

interface UseDisclosureResult<T> {
  isOpen: boolean
  data: T | null
  onOpen: (newData?: T) => void
  onClose: () => void
  onToggle: (newData?: T) => void
}

export const useDisclosure = <T = unknown>({
  defaultIsOpen = false,
  initialData = null
}: UseDisclosureOptions<T> = {}): UseDisclosureResult<T> => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const [data, setData] = useState<T | null>(initialData)

  const onOpen = useCallback((newData?: T) => {
    setIsOpen(true)
    if (newData !== undefined) {
      setData(newData)
    }
  }, [])

  const onClose = useCallback(() => {
    setIsOpen(false)
    setData(null)
  }, [])

  const onToggle = useCallback(
    (newData?: T) => {
      setIsOpen(prev => !prev)
      if (!isOpen && newData !== undefined) {
        setData(newData)
      } else if (isOpen) {
        setData(null)
      }
    },
    [isOpen]
  )

  return { isOpen, data, onOpen, onClose, onToggle }
}
