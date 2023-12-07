// TreeRoot.jsx
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/treeSlice'
import { STATUS } from '../../constants/constants'
import Error from '../utils/Error'
import Loader from '../utils/Loader'
import TreeRoot from './TreeRoot'
import '../../style/components/treeLike.scss'

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
      <div id="tree-like" className="tree-root-container">
        {status === STATUS.LOADING ? (
          <Loader />
        ) : (
          <TreeRoot content={content} />
        )}
      </div>
    </>
  )
}

export default ListLike
