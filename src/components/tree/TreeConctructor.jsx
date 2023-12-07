import SortRadio from '../utils/SortRadio'
import TreeItem from './TreeItem'

const TreeConctructor = ({ content }) => {
  return (
    <div id={`nodes`}>
      <ul>
        {content.map((item) => (
          <TreeItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default TreeConctructor
