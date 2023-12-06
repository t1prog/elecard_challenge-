import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/listSlice'
import { STATUS } from '../../constants/constants'
import Error from '../utils/Error'
import Loader from '../utils/Loader'
import Pagenal from '../utils/Pagenal'

const ListLike = () => {
  const [reload, setReald] = useState(false)
  const { error, status } = useSelector((state) => state.listLike)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === null || reload) {
      setReald(false)
      dispatch(fetchData())
    }
  }, [dispatch, status, reload])

  return (
    <>
      {error && <Error />}
      <div id="list-like" style={{ paddingTop: 20 }}>
        {status === STATUS.LOADING ? <Loader /> : <Pagenal />}
      </div>
    </>
  )
}

export default ListLike
