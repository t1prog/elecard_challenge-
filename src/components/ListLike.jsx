import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../store/listSlice"

const ListLike = () => {
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const { status, error } = useSelector((state) => state.listLike)
  const dispatch = useDispatch(fetchData)
  return (
    <div>{status}</div>
  )
}

export default ListLike

