import { AppLayout, DemoVideoDialog, Typography } from '@/components'
import {
  FloatingNewVideoButton,
  SpotlightFilters
} from '@/features/spotlight/components'
import { VideoPostsList } from '@/features/spotlight/components/VideoPostsList/VideoPostsList'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense>
        <DemoVideoDialog />
      </Suspense>
      <AppLayout className="relative" hideTopNav>
        <FloatingNewVideoButton />
        <div className="py-5">
          <img
            src="/assets/logo_4h.png"
            className="mb-5 w-32"
            alt="company logo"
          />
          <Typography variant="h2" className="mb-0 text-2xl font-bold">
            Talent
          </Typography>
          <Typography className="text-black">
            Explore top trades talent through video showcases. Filter by trade,
            skill, and certifications to find your perfect match.
          </Typography>
          <div className="mb-5 mt-3">
            <SpotlightFilters />
          </div>
          <VideoPostsList />
        </div>
      </AppLayout>
    </>
  )
}
