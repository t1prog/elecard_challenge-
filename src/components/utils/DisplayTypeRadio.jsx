import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeType } from '../../store/viewSlice'
import { VIEW_TYPES } from '../../constants/constants'

const DisplayTypeRadio = () => {
  const dispatch = useDispatch()
  const type = useSelector((state) => state.viewType.type)

  const handleTypeChange = (e) => {
    dispatch(changeType(e.target.value))
  }

  return (
    <FormControl>
      <FormLabel>View</FormLabel>
      <RadioGroup row value={type} onChange={handleTypeChange}>
        <FormControlLabel
          value={VIEW_TYPES.LIST}
          label="List"
          control={<Radio />}
        ></FormControlLabel>
        <FormControlLabel
          value={VIEW_TYPES.TREE}
          label="Tree"
          control={<Radio />}
        ></FormControlLabel>
      </RadioGroup>
    </FormControl>
  )
}

export default DisplayTypeRadio
