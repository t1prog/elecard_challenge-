import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import useSorter from './useSort'

const usePagesInfo = (content, sortBy, sortDirection) => {
  const { pageNum, limitPerPage } = useSelector((state) => state.page)
  const { result } = useSorter(content, sortBy, sortDirection)

  const pageInfo = useMemo(() => {
    const startIndex = (pageNum - 1) * limitPerPage
    const endIndex = startIndex + limitPerPage
    const displayedContent = result.slice(startIndex, endIndex)
    const totalPages = Math.ceil(content.length / limitPerPage)
    return {
      displayedContent,
      totalPages,
      pageNum,
    }
  }, [content, limitPerPage, pageNum, result])

  return pageInfo
}

export default usePagesInfo
