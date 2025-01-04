import {
  Button,
  Checkbox,
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  EditIcon,
  IconSizeEnum,
  Skeleton,
  Typography
} from '@/components'
import React, { useEffect, useState } from 'react'
import { Skill } from '../../types'

type SkillsSelectorProps = {
  skills: Skill[]
  selectedSkills: string[]
  onSave: (skills: string[]) => void
  isLoading?: boolean
}

export const SkillsSelector = ({
  selectedSkills,
  skills,
  onSave,
  isLoading
}: SkillsSelectorProps) => {
  const [selected, setSelected] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setSelected(selectedSkills)
  }, [selectedSkills])

  const handleSelect = (skillId: string) => {
    setSelected(state => {
      const exists = state.includes(skillId)
      if (exists) return state.filter(id => id !== skillId)
      return [...state, skillId]
    })
  }

  return (
    <Drawer open={isOpen}>
      <DrawerTrigger>
        <div
          onClick={() => setIsOpen(true)}
          className="mt-3 flex cursor-pointer items-center gap-1 rounded-full border-2 border-secondary px-10 py-3 text-sm font-bold text-primary transition-all duration-200 hover:bg-secondary/5"
        >
          <EditIcon size={IconSizeEnum.SM} />
          Select Skills
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-[100dvh] overflow-auto">
        <DrawerTitle></DrawerTitle>
        <div className="mx-auto mt-4 max-w-xl px-3">
          <Typography className="w-full text-center font-bold" variant="h6">
            Select Skills
          </Typography>
          <Typography className="w-full text-center text-black">
            Select which skills are most important for applicants to have
          </Typography>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {isLoading &&
              Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="h-3 w-16" />
              ))}
            {skills.map(skill => (
              <div key={skill.id} className="flex w-fit items-center gap-1">
                <Checkbox
                  checked={selected.includes(skill.id)}
                  onCheckedChange={() => handleSelect(skill.id)}
                />
                <Typography variant="p" className="text-xs text-black">
                  {skill.skill_name}
                </Typography>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Button
              variant={'primaryWithSecondary'}
              size={'xxl'}
              className="font-bold"
              rounded
              onClick={() => {
                onSave(selected)
                setIsOpen(false)
              }}
            >
              Save Selection
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
