'use client'

import { InfiniteScroll, JobPosting } from '@/components'
import React from 'react'
import { getVideosPaginated } from '../../actions'
import { UserVideo } from '../../types'
import { Loader2 } from 'lucide-react'

export const VideoPostsList = () => {
  const getVideos = async (page: number, limit: number) => {
    const { data } = await getVideosPaginated({
      limit: limit,
      page
    })

    return data
  }
  return (
    <InfiniteScroll
      fetchData={getVideos}
      loader={
        <div className="flex w-full items-center justify-center py-3">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
        </div>
      }
      className="flex flex-col gap-4"
      renderItem={(job: UserVideo, index) => (
        <JobPosting
          user={{
            avatar: job.profile.profile_pic || '',
            name: job.profile.first_name + ' ' + job.profile.last_name,
            id: job.poster_id
          }}
          date={new Date(job.created_at)}
          description={job.video_description}
          skills={job.skills.map(skill => skill.skill_name)}
          playback_id={job.playback_id}
          title={job.video_title}
          id={job.id}
          key={index}
        />
      )}
      limit={10}
      noMoreDataMessage={<></>}
    />
  )
}
