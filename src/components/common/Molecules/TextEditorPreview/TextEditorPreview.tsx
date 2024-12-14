'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Typography } from '../../Atoms'

import './styles.css'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

type TextEditorPreviewProps = {
  title?: string
  content: string
}

export const TextEditorPreview = ({
  content,
  title
}: TextEditorPreviewProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [content])

  const maxHeightCollapsed = 150
  const extraSpace = useMemo(() => (title ? 60 : 0), [title])

  const hasReadMoreButton = useMemo(() => {
    return contentHeight + extraSpace > maxHeightCollapsed
  }, [contentHeight, maxHeightCollapsed, extraSpace])

  return (
    <motion.div
      className={cn(
        'relative max-h-full w-full overflow-hidden rounded-3xl border border-tertiary p-3',
        !hasReadMoreButton && '!h-auto'
      )}
      initial={{
        height: maxHeightCollapsed
      }}
      animate={{
        height: isDisplayed ? contentHeight + extraSpace : maxHeightCollapsed
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {title && (
        <Typography variant="p" className="font-semibold">
          {title}
        </Typography>
      )}
      {hasReadMoreButton && (
        <>
          {isDisplayed ? (
            <p
              onClick={() => setIsDisplayed(false)}
              className="absolute bottom-1 right-2 cursor-pointer text-[10px] font-bold uppercase text-primary"
            >
              {isDisplayed ? 'Read Less' : 'Read More'}
            </p>
          ) : (
            <div
              className={cn(
                'absolute bottom-0 right-0 flex h-12 w-full cursor-pointer items-end justify-end bg-gradient-to-b from-transparent to-white'
              )}
            >
              <p
                onClick={() => setIsDisplayed(true)}
                className="mb-1 mr-2 h-fit w-fit text-[10px] font-bold uppercase text-primary"
              >
                READ MORE
              </p>
            </div>
          )}
        </>
      )}
      <div
        ref={contentRef}
        className={'text_editor_preview mt-2 overflow-hidden text-sm'}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  )
}
