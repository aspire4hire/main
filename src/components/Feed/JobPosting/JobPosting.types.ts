type JobPostingProps = {
  date: Date
  title: string
  description: string
  skills: string[]
  user: {
    name?: string
    avatar?: string
  }
  playback_id: string
}

export type { JobPostingProps }
