'use client'

import React, { useRef, useEffect, useState } from 'react'

type InfiniteScrollProps<T> = {
  fetchData: (
    page: number,
    limit: number,
    otherFilters?: object
  ) => Promise<T[]>
  renderItem: (item: T, index: number) => React.ReactNode
  limit?: number
  loader?: React.ReactNode
  noMoreDataMessage?: React.ReactNode
  className?: HTMLElement['className']
  otherFilters?: string[]
  extraFilters?: object
}

const InfiniteScroll = <T,>({
  fetchData,
  renderItem,
  limit = 10,
  loader = <p>Loading...</p>,
  noMoreDataMessage = <p>No more data</p>,
  className,
  otherFilters,
  extraFilters = {}
}: InfiniteScrollProps<T>) => {
  const [data, setData] = useState<T[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)

  const observerRef = useRef<HTMLDivElement | null>(null)

  const loadData = async () => {
    if (!hasMore) return
    try {
      setIsLoading(true)
      const newData = await fetchData(page, limit, extraFilters)
      setData(prevData => {
        const ids = new Set()
        return [...prevData, ...newData].filter(
          ({ id }: any) => !ids.has(id) && ids.add(id)
        )
      })
      setHasMore(newData.length > 0)
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setPage(1)
    setData([])
    setHasMore(true)
  }, [JSON.stringify(otherFilters)])

  useEffect(() => {
    setTimeout(() => {
      loadData()
    }, 0)
  }, [page, JSON.stringify(otherFilters)])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage(prevPage => prevPage + 1)
        }
      },
      { threshold: 1.0 }
    )

    if (observerRef.current) observer.observe(observerRef.current)

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [hasMore, isLoading])

  return (
    <div className={className}>
      {data.map(renderItem)}
      {isLoading && loader}
      <div ref={observerRef}></div>
      {!hasMore && noMoreDataMessage}
    </div>
  )
}

export { InfiniteScroll }
