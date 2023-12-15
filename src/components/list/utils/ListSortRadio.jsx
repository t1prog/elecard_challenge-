import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Switch,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SORT_DIRECTION, SORT_BY } from '../../../services/constants'

const ListSortRadio = ({ ...props }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(props.sortDirection === SORT_DIRECTION.DESC)

  const handleChange = (event) => {
    const isChecked = event.target.checked
    dispatch(
      props.toggleSortDirection(isChecked ? SORT_DIRECTION.DESC : SORT_DIRECTION.ASC)
    )
    setChecked(isChecked)
  }

  return (
    <div className="sort-radio-container">
      <FormControl className="sort-radio-form">
        <FormLabel className="sort-radio-label">Sort by</FormLabel>
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
          <FormControlLabel
            value={SORT_BY.FILENAME}
            label="Name"
            control={<Radio />}
          ></FormControlLabel>
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel className="sort-radio-label">Ascending?</FormLabel>
        <Switch checked={checked} onChange={handleChange} />
      </FormControl>
    </div>
  )
}

export default ListSortRadio
