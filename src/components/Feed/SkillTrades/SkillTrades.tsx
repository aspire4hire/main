import { Typography } from '@/components/common'
import Image from 'next/image'
import React from 'react'

type SkillTradeProps = {
  name: string
  icon: string
}

export const SkillTrade = ({ icon, name }: SkillTradeProps) => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={icon}
        alt={name}
        className="w-8 rounded-full"
        width={32}
        height={32}
      />
      <Typography variant="p" className="text-base font-semibold">
        {name}
      </Typography>
    </div>
  )
}
