import { Button } from '@mui/material'
import { localStorage } from '../../../../store/services/localstorage/localStorage.service'

const ClearStorage = () => {
  const refreshAll = () => {
    localStorage.clear()
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
