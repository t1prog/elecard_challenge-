import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/listSlice'
import { STATUS } from '../../constants/constants'
import Error from '../utils/Error'
import Loader from '../utils/Loader'
import ListConstructor from './ListConstructor'
import '../../style/components/listLike.scss'

const ListLike = () => {
  const { error, status } = useSelector((state) => state.listLike)
  const content = useSelector((state) => state.listLike.content)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === null) {
      dispatch(fetchData())
    }
  }, [dispatch, status])

  return (
    <>
      {error && <Error />}
      <div id="list-like" className="list-like-container">
        {status === STATUS.LOADING ? (
          <Loader />
        ) : (
          <ListConstructor content={content} />
        )}
      </div>
    </>
  )
}

export default ListLike
