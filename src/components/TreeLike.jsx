import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/treeSlice'
import { STATUS } from '../constants/constants'
import Error from './Error'
import Loader from './Loader'

const TreeLike = () => {
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
    <div id="tree-like">
      {error && <Error />}
      Tree
      {status === STATUS.LOADING && <Loader />}
    </div>
  )
}

export default TreeLike
