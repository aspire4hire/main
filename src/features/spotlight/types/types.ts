import { Skill } from '@/features/jobs'
import { Profile } from '@/features/onboarding/types'

export interface UploadVideoDTO {
  file: File
  skills: string[]
  description: string
  title: string
  id: string
}

export interface UserVideo {
  id: string
  poster_id: string
  video_title: string
  video_description: string
  playback_id: string
  profile: Pick<Profile, 'first_name' | 'last_name' | 'profile_pic'>
  skills: Skill[]
  created_at: string
}
