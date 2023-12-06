import { Box } from '@mui/material'
import { useSelector } from 'react-redux'

const Error = () => {
  const errorMessage = useSelector((state) => state.listLike.error)
  //TODO: Убрать inline стили
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        width: '100%',
      }}
    >
      <Box sx={{ justifyContent: 'center', position: 'fixed' }}>
        <div
          style={{
            textAlign: 'center',
            border: 'solid 0.4px white',
            borderRadius: '5px',
            color: 'white',
            backgroundColor: '#d32f2f',
            padding: 10,
            fontSize: 18,
            marginTop: 10,
            cursor: 'default',
          }}
        >
          {errorMessage}
        </div>
      </Box>
    </div>
  )
}

export default Error
