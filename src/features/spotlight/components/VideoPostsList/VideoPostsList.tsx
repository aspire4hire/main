'use client'

import { InfiniteScroll, JobPosting } from '@/components'
import React from 'react'
import { getVideosPaginated } from '../../actions'
import { UserVideo } from '../../types'
import { Loader2 } from 'lucide-react'
import { useSpotlightStateStoreStore } from '../../store'
import { JobPostingLoader } from '@/components/Feed/JobPosting/JobPostingLoader'

export const VideoPostsList = () => {
  const { filter } = useSpotlightStateStoreStore()
  const getVideos = async (
    page: number,
    limit: number,
    otherFilters?: object
  ) => {
    const { data } = await getVideosPaginated({
      limit: limit,
      page,
      ...otherFilters
    })

    return data
  }
  return (
    <InfiniteScroll
      fetchData={getVideos}
      loader={
        <>
          {Array.from({ length: 3 }).map((_, index) => (
            <JobPostingLoader key={index} />
          ))}
        </>
      }
      otherFilters={[
        ...filter.credentials,
        ...filter.skills,
        ...filter.skillTrades
      ]}
      extraFilters={filter}
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
