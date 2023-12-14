import { useSelector } from 'react-redux'
import TreeRoot from './TreeRoot'

const Tree = () => {
  const content = useSelector((state) => state.tree.content)
  return (
    <div id="tree-like" className="tree-root-container">
      <TreeRoot content={content} />
    </div>
  )
}

export default Tree
