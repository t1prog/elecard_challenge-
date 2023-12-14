import { useSelector } from 'react-redux'
import ListContainer from './ListContainer'

const List = () => {
  const content = useSelector((state) => state.list.content)

  return (
    <>
      <div id="list-like" className="list-like-container">
        <ListContainer content={content} />
      </div>
    </>
  )
}

export default List
