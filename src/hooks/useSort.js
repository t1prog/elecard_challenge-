import { SORT_BY, SORT_DIRECTION } from '../services/constants'

const compareByProperty = (a, b, property) => {
  switch (property) {
    case SORT_BY.DATE:
      return a.timestamp - b.timestamp
    case SORT_BY.FILESIZE:
      return a.filesize - b.filesize
    case SORT_BY.CATEGORY:
      return a.category.localeCompare(b.category)
    default:
      return 0
  }
}

const useSorter = (content, sortBy, sortDirection) => {
  let result
  if (sortDirection === SORT_DIRECTION.DESC) {
    result = [...content].sort((a, b) => compareByProperty(b, a, sortBy))
  } else if (sortDirection === SORT_DIRECTION.ASC) {
    result = [...content].sort((a, b) => compareByProperty(a, b, sortBy))
  }

  return { result }
}

export default useSorter
