type JobPostingProps = {
  id: string
  date: Date
  title: string
  description: string
  skills: string[]
  user: {
    name?: string
    avatar?: string
    id: string
  }
  playback_id: string
}

export type { JobPostingProps }
