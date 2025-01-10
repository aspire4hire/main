import { useSpotlightStateStoreStore } from '@/features/spotlight/store'
import { useCallback, useMemo, useState } from 'react'

export type FilterState = {
  skillTrades: string[]
  skills: string[]
  credentials: string[]
}

const useFilterState = () => {
  const { setSpotlightStateStore, filter: initialFilter } =
    useSpotlightStateStoreStore()

  const [filter, setFilter] = useState<FilterState>({
    credentials: initialFilter.credentials || [],
    skills: initialFilter.skills || [],
    skillTrades: initialFilter.skillTrades || []
  })

  const hasSomeFilterApply = useMemo(
    () =>
      filter.credentials.length > 0 ||
      filter.skills.length > 0 ||
      filter.skillTrades.length > 0,
    [filter]
  )

  const handleChangeFilter = useCallback(
    ({
      type,
      value
    }: {
      type: 'credentials' | 'skills' | 'skillTrades'
      value: string
    }) => {
      setFilter(prevState => ({
        ...prevState,
        [type]: prevState[type].includes(value)
          ? prevState[type].filter(item => item !== value)
          : [...prevState[type], value]
      }))
    },
    []
  )

  const handleCheckAllSkills = useCallback((skills: string[]) => {
    setFilter(prevState => ({
      ...prevState,
      skills
    }))
  }, [])

  const handleRemoveAllFilters = useCallback(() => {
    setFilter({
      credentials: [],
      skills: [],
      skillTrades: []
    })
  }, [])

  const onSubmit = useCallback(() => {
    setSpotlightStateStore({
      filter
    })
  }, [filter, setSpotlightStateStore])

  return {
    filter,
    hasSomeFilterApply,
    onSubmit,
    handleChangeFilter,
    handleCheckAllSkills,
    handleRemoveAllFilters
  }
}

export { useFilterState }
