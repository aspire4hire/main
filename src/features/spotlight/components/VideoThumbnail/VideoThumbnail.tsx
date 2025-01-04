'use client'

/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogSizeEnum,
  DialogTitle,
  IconSizeEnum,
  PlayIcon
} from '@/components'
import { MUX_THUMBNAIL_URL } from '@/lib'
import { useDisclosure } from '@/utils'
import MuxPlayer from '@mux/mux-player-react'
import { X } from 'lucide-react'

type VideoThumbnailProps = {
  playback_id: string
  width?: number
  height?: number
  format?: 'webp' | 'jpg' | 'png'
  fitMode?: 'smartcrop'
}

export const VideoThumbnail = ({
  playback_id,
  fitMode = 'smartcrop',
  format = 'webp',
  height = 168,
  width = 128
}: VideoThumbnailProps) => {
  const disclosure = useDisclosure()
  return (
    <>
      <Dialog
        isOpen={disclosure.isOpen}
        onClose={disclosure.onClose}
        className="h-screen border-0 bg-transparent p-2 shadow-none outline-none"
        hideCloseButton
        size={DialogSizeEnum.FULLSCREEN}
      >
        <DialogTitle className="hidden"></DialogTitle>
        <DialogClose className="absolute right-4 top-4 rounded-sm text-white opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </DialogClose>

        <div className="flex h-full w-full items-center justify-center">
          <MuxPlayer
            playbackId={playback_id}
            // className="h-fit w-fit md:max-h-[80vh] md:max-w-[80vw]"
            className="h-[90dvh] w-[90dvw]"
            accentColor="#023047"
          />
        </div>
      </Dialog>
      <div
        className="group relative h-fit w-fit cursor-pointer overflow-hidden rounded-xl"
        onClick={disclosure.onOpen}
      >
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black/45">
          <PlayIcon
            size={IconSizeEnum['2XL']}
            className="!h-16 !w-16 text-white transition-all duration-300 group-hover:!h-[50px] group-hover:!w-[50px]"
          />
        </div>
        <img
          src={`${MUX_THUMBNAIL_URL}/${playback_id}/thumbnail.${format}?width=${width}&height=${height}&format=${format}&fit_mode=${fitMode}`}
          className="h-[168px] w-[128px] rounded-xl object-cover"
          alt="thumbnail"
        />
      </div>
    </>
  )
}
