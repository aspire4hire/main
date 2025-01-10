'use client'

import { Checkbox, Switch, Typography } from '@/components'
import { Skill } from '@/features/jobs'
import React, { useMemo, useState } from 'react'

type FilterSkillsProps = {
  skills: Skill[]
  onChange: (id: string) => void
  onCheckAll: (skills: string[]) => void
  checkedSkills: string[]
}

export const FilterSkills = ({
  skills,
  onChange,
  onCheckAll,
  checkedSkills
}: FilterSkillsProps) => {
  const [viewMore, setViewMore] = useState(false)

  const items = useMemo(() => {
    if (viewMore) {
      return [...skills]
    }

    return [...skills].splice(0, 8)
  }, [skills, viewMore])

  const isAllChecked = useMemo(
    () => checkedSkills.length === skills.length,
    [checkedSkills.length, skills.length]
  )

  return (
    <div className="mt-7">
      <Typography className="mb-3 font-bold">Included Skill Tags:</Typography>
      <div className="mb-2 flex items-center gap-2">
        <Typography variant="p" className="text-base font-medium">
          All Skills
        </Typography>
        <Switch
          onCheckedChange={checked =>
            onCheckAll(checked ? skills.map(s => s.id) : [])
          }
          checked={isAllChecked}
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((skill, index) => (
          <div key={index}>
            <Checkbox
              classNameLabel="text-xs"
              className="h-5 w-5"
              onCheckedChange={() => onChange(skill.id)}
              label={skill.skill_name}
              checked={checkedSkills.includes(skill.id)}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex w-full justify-end border-t-2 border-primary pt-1">
        <button type="button" onClick={() => setViewMore(!viewMore)}>
          <Typography className="text-xs font-bold">
            {!viewMore ? 'SEE MORE' : 'SEE LESS'}
          </Typography>
        </button>
      </div>
    </div>
  )
}
