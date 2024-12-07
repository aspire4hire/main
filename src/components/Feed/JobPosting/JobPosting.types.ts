type JobPostingProps = {
  date: Date
  title: string
  description: string
  skills: string[]
  user: {
    name?: string
    avatar?: string
  }
}

export type { JobPostingProps }
