import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/listSlice'
import { STATUS } from '../constants/constants'
import Error from './Error'
import Loader from './Loader'
import ListItem from './ListItem'
import { Grid } from '@mui/material'

const ListLike = () => {
  const [reload, setReald] = useState(false)
  const { content, error, status } = useSelector((state) => state.listLike)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === null || reload) {
      setReald(false)
      dispatch(fetchData())
    }
  }, [dispatch, status, reload])

  return (
    <div id="list-like" style={{ paddingTop: 20 }}>
      {error && <Error />}

      <Grid container rowGap={3}>
        {content.map((item) => (
          <Grid key={item.id} item md={4} sm={6} xs={6}>
            <ListItem {...item} />
          </Grid>
        ))}
      </Grid>

      {status === STATUS.LOADING && <Loader />}
    </div>
  )
}

export default ListLike
