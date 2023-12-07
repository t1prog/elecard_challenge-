const useDateTime = (timestamp) => {
  const date = new Date(timestamp)

  const formatDatePart = (part) => (part < 10 ? `0${part}` : part)

  const year = date.getFullYear()
  const month = formatDatePart(date.getMonth() + 1)
  const day = formatDatePart(date.getDate())
  const hours = formatDatePart(date.getHours())
  const minutes = formatDatePart(date.getMinutes())
  const seconds = formatDatePart(date.getSeconds())

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

export default useDateTime
