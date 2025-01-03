import { AppLayout, Typography } from '@/components'
import { FloatingNewVideoButton } from '@/features/spotlight/components'
import { VideoPostsList } from '@/features/spotlight/components/VideoPostsList/VideoPostsList'

export default async function Home() {
  // const getVideos = async (offset: number, limit: number) => {
  //   const { data } = await getVideosPaginated({
  //     limit: limit,
  //     offset: offset
  //   })

  //   return data
  // }

  return (
    <AppLayout className="relative" hideTopNav>
      <FloatingNewVideoButton />
      <div className="py-5">
        <img src="/assets/logo_4h.png" className="mb-5 w-32" />
        <Typography variant="h2" className="mb-0 text-2xl font-bold">
          Spotlight
        </Typography>
        <Typography className="text-black">
          Explore top trades talent through video showcases. Filter by trade,
          skill, and certifications to find your perfect match.
        </Typography>
        <VideoPostsList />
        {/* <div className="mt-5 space-y-4">
          {data.map((job, index) => (
            <JobPosting
              user={{
                avatar: job.profile.profile_pic || '',
                name: job.profile.first_name + ' ' + job.profile.last_name
              }}
              date={new Date(job.created_at)}
              description={job.video_description}
              skills={job.skills.map(skill => skill.skill_name)}
              playback_id={job.playback_id}
              title={job.video_title}
              key={index}
            />
          ))}
        </div> */}
      </div>
    </AppLayout>
  )
}
