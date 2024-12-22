/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { EyeIcon, Trash2Icon } from 'lucide-react'

import {
  EditIcon,
  IconSizeEnum,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ThreeDotIcon,
  Typography
} from '@/components'
import { Company } from '@/features/company'

type CompanyProfileDetailsProps = {
  companies: Company[]
  onView?: (company: Company) => void
  onEdit?: (company: Company) => void
  onDelete?: (company: Company) => void
}

export const CompanyProfileDetails = ({
  companies,
  onDelete,
  onEdit,
  onView
}: CompanyProfileDetailsProps) => {
  return (
    <div className="flex flex-col gap-3">
      {companies.map(company => (
        <div
          key={company.id}
          className="flex justify-between rounded-xl border border-tertiary bg-white p-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <img
              src={company.logo_url || ''}
              className="h-8 w-8 rounded-full object-cover"
              alt="company logo"
            />
            <Typography className="font-bold text-black">
              {company.name}
            </Typography>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex aspect-square w-fit items-center rounded-full border-none p-2 outline-none transition-all hover:bg-tertiary/10">
                <ThreeDotIcon size={IconSizeEnum.MD} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-52 bg-gray-100 p-0">
              {onView && (
                <button
                  onClick={() => onView(company)}
                  className="flex w-full items-center gap-1 p-3 transition-all hover:bg-tertiary/10"
                >
                  <EyeIcon className="!h-5 !w-5 font-semibold text-primary" />
                  <Typography variant="span" className="text-sm font-semibold">
                    View Company
                  </Typography>
                </button>
              )}
              {onEdit && (
                <button
                  onClick={() => onEdit(company)}
                  className="flex w-full items-center gap-2 p-3 transition-all hover:bg-tertiary/10"
                >
                  <EditIcon
                    size={IconSizeEnum.SM}
                    className="!h-5 !w-5 font-semibold text-primary"
                  />
                  <Typography variant="span" className="text-sm font-semibold">
                    Edit Company
                  </Typography>
                </button>
              )}
              {onDelete && (
                <button
                  onClick={() => onDelete(company)}
                  className="flex w-full items-center gap-1 p-3 transition-all hover:bg-tertiary/10"
                >
                  <Trash2Icon className="!h-5 !w-5 font-semibold text-destructive" />
                  <Typography
                    variant="span"
                    className="text-sm font-semibold text-destructive"
                  >
                    Delete Company
                  </Typography>
                </button>
              )}
            </PopoverContent>
          </Popover>
        </div>
      ))}
    </div>
  )
}
