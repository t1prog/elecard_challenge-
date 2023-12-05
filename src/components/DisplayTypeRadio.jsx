import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeType } from '../store/viewSlice'

const DisplayTypeRadio = () => {
  const dispatch = useDispatch()
  const type = useSelector((state) => state.viewType.type)
  return (
    <FormControl>
      <FormLabel>View</FormLabel>
      <RadioGroup
        row
        value={type}
        onChange={(e) => dispatch(changeType(e.target.value))}
      >
        <FormControlLabel
          value="list"
          label="List"
          control={<Radio />}
        ></FormControlLabel>
        <FormControlLabel
          value="tree"
          label="Tree"
          control={<Radio />}
        ></FormControlLabel>
      </RadioGroup>
    </FormControl>
  )
}

export default DisplayTypeRadio
