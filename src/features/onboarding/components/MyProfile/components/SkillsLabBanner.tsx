import { ArrowRightIcon } from '@/components'

export const SkillsLabBanner = () => {
  return (
    <a
      href="https://forms.gle/VJU6FUjAY1cPc5KS8"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-4 flex w-full cursor-pointer items-center justify-between rounded-xl bg-[#678391] px-4 py-3"
    >
      <div className="flex flex-col gap-[4px]">
        <p className="m-0 text-[14px] font-bold leading-tight text-white">
          A4H Skills Lab: Exit Questionnaire
        </p>
        <p className="m-0 text-[12px] font-normal leading-tight text-white">
          This form is intended for EJEFT students only
        </p>
      </div>
      <ArrowRightIcon className="shrink-0 text-white" />
    </a>
  )
}
