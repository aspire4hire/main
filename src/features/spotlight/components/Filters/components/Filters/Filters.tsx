/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useMemo } from 'react'

import { Button, DialogTitle, Switch, Typography } from '@/components'
import { useSkills } from '@/features/jobs/hooks'
import { useCredentials, useSkillTrades } from '@/features/onboarding/hooks'
import { FilterSkills } from './FilterSkills'
import { FilterCredentials } from './FilterCredentials'
import { useFilterState } from '../../hooks'
import { FiltersLoader } from './FiltersLoader'

type FiltersProps = {
  onClose: () => void
}

export const Filters = ({ onClose }: FiltersProps) => {
  const { data: skillsTrades, isLoading: isLoadingSkillTrades } =
    useSkillTrades()

  const { data: skills, isLoading: isLoadingSkills } = useSkills()

  const { data: credentials, isLoading: isLoadingCredentials } =
    useCredentials()

  const {
    filter,
    hasSomeFilterApply,
    handleChangeFilter,
    handleCheckAllSkills,
    handleRemoveAllFilters,
    onSubmit
  } = useFilterState()

  const isLoading = useMemo(
    () => isLoadingCredentials || isLoadingSkills || isLoadingSkillTrades,
    [isLoadingSkillTrades, isLoadingSkills, isLoadingCredentials]
  )

  return (
    <>
      <DialogTitle className="hidden"></DialogTitle>
      {isLoading ? (
        <FiltersLoader />
      ) : (
        <div className="">
          <Typography
            variant="h5"
            className="mb-4 h-fit w-full text-center font-medium"
          >
            Set Filter Criteria
          </Typography>
          {hasSomeFilterApply && (
            <div className="flex w-full justify-center">
              <button
                type="button"
                className="mb-4 appearance-none border-none text-xs font-bold text-destructive underline outline-none transition-all hover:text-destructive/80"
                onClick={handleRemoveAllFilters}
              >
                Clear Applied Filter
              </button>
            </div>
          )}
          <div className="overflow-y-auto">
            <Typography className="mb-3 font-bold">Included Trades:</Typography>
            <div className="space-y-3">
              {skillsTrades.map((skillTrade, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={skillTrade.trade_icon}
                      className="h-8 w-8 rounded-full"
                      alt={skillTrade.trade_name}
                    />
                    <Typography variant="p" className="text-base font-medium">
                      {skillTrade.trade_name}
                    </Typography>
                  </div>
                  <Switch
                    checked={filter.skillTrades.includes(skillTrade.id as any)}
                    onCheckedChange={() =>
                      handleChangeFilter({
                        type: 'skillTrades',
                        value: skillTrade.id as any
                      })
                    }
                  />
                </div>
              ))}
            </div>
            <FilterSkills
              skills={skills}
              onChange={id =>
                handleChangeFilter({
                  type: 'skills',
                  value: id
                })
              }
              onCheckAll={handleCheckAllSkills}
              checkedSkills={filter.skills}
            />
            <FilterCredentials
              credentials={credentials}
              onChange={id =>
                handleChangeFilter({
                  type: 'credentials',
                  value: id
                })
              }
              checkedCredentials={filter.credentials}
            />
          </div>
          <div className="flex w-full justify-center">
            <Button
              onClick={() => {
                onSubmit()
                onClose()
              }}
              size="xxl"
              rounded
              className="mx-auto"
              variant={'primaryWithSecondary'}
            >
              Save Selection
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
