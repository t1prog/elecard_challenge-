import { SORT_BY, SORT_DIRECTION } from '../constants/constants'

const useSorter = (content, sortBy, sortDirection) => {
  function compareByProperty(a, b, property) {
    if (property === SORT_BY.DATE) {
      return a.timestamp - b.timestamp
    } else if (property === SORT_BY.FILESIZE) {
      return a.filesize - b.filesize
    } else if (property === SORT_BY.CATEGORY) {
      return a.category.localeCompare(b.category)
    }
    return 0
  }

  let result
  if (sortDirection === SORT_DIRECTION.DESC) {
    result = [...content].sort((a, b) => compareByProperty(a, b, sortBy))
  } else if (sortDirection === SORT_DIRECTION.ASC) {
    result = [...content].sort((a, b) => compareByProperty(b, a, sortBy))
  }

  return { result }
}

export default useSorter
