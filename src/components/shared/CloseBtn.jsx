import { Grid } from '@mui/material'
import PropTypes from 'prop-types'

const CloseBtn = ({ handle, background = true }) => {
  const className = background ? 'close-btn' : 'close-btn__no-background'

  return (
    <Grid className={className}>
      <span className="close" onClick={handle}>
        &#10006;
      </span>
    </Grid>
  )
}

CloseBtn.propTypes = {
  handle: PropTypes.func.isRequired,
  background: PropTypes.bool,
}

export default CloseBtn
