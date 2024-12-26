'use client'

import { cn } from '@/utils'
import React, { useState } from 'react'

export const JobTabs = () => {
  const [currentTab, setCurrentTab] = useState<'posts' | 'applicants'>('posts')
  return (
    <div className="grid w-full grid-cols-2">
      <button
        className={cn(
          'w-full appearance-none border-2 border-primary',
          currentTab === 'posts'
            ? 'bg-primary text-secondary'
            : 'text- bg-transparent hover:bg-primary/10'
        )}
        onClick={() => setCurrentTab('posts')}
      >
        Job Post
      </button>
      <button
        className={cn(
          'w-full appearance-none border-2 border-primary',
          currentTab === 'posts'
            ? 'bg-primary text-secondary'
            : 'text- bg-transparent hover:bg-primary/10'
        )}
        onClick={() => setCurrentTab('applicants')}
      >
        Applicants
      </button>
    </div>
  )
}
