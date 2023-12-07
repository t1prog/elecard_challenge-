import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
} from '@mui/material'
import { useDispatch } from 'react-redux'
import { SORT_DIRECTION, SORT_BY } from '../../constants/constants'
import { useState } from 'react'

const SortRadio = ({ ...props }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(() => {
    if (props.sortDirection === SORT_DIRECTION.DESC) return true
    return false
  })

  const handleChange = (event) => {
    if (event.target.checked===true) {
      dispatch(props.toggleSortDirection(SORT_DIRECTION.DESC))
    } else {
      dispatch(props.toggleSortDirection(SORT_DIRECTION.ASC))
    }
    setChecked(event.target.checked)
  }

  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <FormControl>
        <FormLabel>Sort by</FormLabel>
        <RadioGroup
          row
          value={props.sortBy}
          onChange={(e) => dispatch(props.changeSortBy(e.target.value))}
        >
          <FormControlLabel
            value={SORT_BY.DATE}
            label="Date"
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            value={SORT_BY.CATEGORY}
            label="Category"
            control={<Radio />}
          ></FormControlLabel>
          <FormControlLabel
            value={SORT_BY.FILESIZE}
            label="File size"
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Ascending?</FormLabel>
        <Switch checked={checked} onChange={handleChange} />
      </FormControl>
    </div>
  )
}

export default SortRadio
