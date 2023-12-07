import { Button } from '@mui/material'

const ClearStorage = () => {
  const refreshAll = () => {
    window.localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={refreshAll}>
        Refresh
      </Button>
    </div>
  )
}

export default ClearStorage
