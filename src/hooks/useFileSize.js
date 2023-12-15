const useFileSize = (filesize) => {
  return (filesize / 1024).toFixed(2)
}

export default useFileSize
