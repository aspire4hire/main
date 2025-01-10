'use client'

import { Button } from '@/components'
import { useSpotlightStateStoreStore } from '@/features/spotlight/store'
import { Filter, FilterX } from 'lucide-react'
import React, { useMemo } from 'react'

type FilterButtonProps = {
  onClick: () => void
}

export const FilterButton = ({ onClick }: FilterButtonProps) => {
  const { filter, setSpotlightStateStore } = useSpotlightStateStoreStore()

  const hasSomeFilterApply = useMemo(
    () =>
      filter.credentials.length > 0 ||
      filter.skills.length > 0 ||
      filter.skillTrades.length > 0,
    [filter]
  )

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={'ghostSecondary'}
        rounded
        className="flex items-center gap-2 font-bold text-primary"
        onClick={onClick}
      >
        <Filter />
        Filter Video Feed
      </Button>
      {hasSomeFilterApply && (
        <button
          type="button"
          className="appearance-none border-none text-xs font-bold text-destructive underline outline-none transition-all hover:text-destructive/80"
          onClick={() =>
            setSpotlightStateStore({
              filter: {
                credentials: [],
                skills: [],
                skillTrades: []
              }
            })
          }
        >
          Clear Applied Filter
        </button>
      )}
    </div>
  )
}
