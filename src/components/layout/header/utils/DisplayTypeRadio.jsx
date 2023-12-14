import { useDispatch, useSelector } from 'react-redux'
import { changeType } from '../../../../store/view/view.slice'
import { VIEW_TYPES } from '../../../../services/constants'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material'

const DisplayTypeRadio = () => {
  const dispatch = useDispatch()
  const viewType = useSelector((state) => state.view.type)

  const handleTypeChange = (e) => {
    dispatch(changeType(e.target.value))
  }

  return (
    <FormControl>
      <FormLabel>View Type</FormLabel>
      <RadioGroup row value={viewType} onChange={handleTypeChange}>
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
