const useDateTime = (timestamp) => {
  const date = new Date(timestamp)

  const formatDatePart = (part) => `${part < 10 ? '0' : ''}${part}`

  const formattedDate = `${date.getFullYear()}-${formatDatePart(
    date.getMonth() + 1
  )}-${formatDatePart(date.getDate())} ${formatDatePart(
    date.getHours()
  )}:${formatDatePart(date.getMinutes())}:${formatDatePart(date.getSeconds())}`

  return formattedDate
}

export default useDateTime
