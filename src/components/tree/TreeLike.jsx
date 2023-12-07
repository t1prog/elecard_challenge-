import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/treeSlice'
import { STATUS } from '../../constants/constants'
import Error from '../utils/Error'
import Loader from '../utils/Loader'
import TreeConctructor from './TreeConctructor'

const ListLike = () => {
  const { error, status } = useSelector((state) => state.treeLike)
  const content = useSelector((state) => state.treeLike.content)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === null) {
      dispatch(fetchData())
    }
  }, [dispatch, status])

  return (
    <>
      {error && <Error />}
      <div id="tree-like" style={{ paddingTop: 20, minHeight: '100%' }}>
        {status === STATUS.LOADING ? (
          <Loader />
        ) : (
          <TreeConctructor content={content} />
        )}
      </div>
    </>
  )
}

export default ListLike
