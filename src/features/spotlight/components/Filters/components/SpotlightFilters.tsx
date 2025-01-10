'use client'

import React from 'react'
import { FilterButton } from './FilterButton'
import { Filters } from './Filters'
import { useDisclosure } from '@/utils'
import { Dialog, DialogSizeEnum } from '@/components'

export const SpotlightFilters = () => {
  const { onOpen, isOpen, onClose } = useDisclosure()

  return (
    <>
      <FilterButton onClick={onOpen} />
      <Dialog
        isOpen={isOpen}
        onClose={() => {
          onClose()
        }}
        size={DialogSizeEnum.MD}
        className="max-h-[100dvh] overflow-y-auto md:max-h-[90dvh]"
      >
        <Filters onClose={onClose} />
      </Dialog>
    </>
  )
}
