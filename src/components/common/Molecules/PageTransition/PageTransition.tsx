'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { cn } from '@/utils'

type PageTransitionProps = {
  children: React.ReactNode
  className?: HTMLElement['className']
}

export const PageTransition = ({
  children,
  className
}: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
      className={cn(className, 'overflow-hidden')}
    >
      {children}
    </motion.div>
  )
}
