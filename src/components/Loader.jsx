import { Box, CircularProgress } from '@mui/material'

const Loader = () => {
  //Todo: убрать inline стили
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px', paddingTop: '50px'}}>
      <CircularProgress />
    </Box>
  )
}

export default Loader
