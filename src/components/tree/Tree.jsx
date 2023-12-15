import { useSelector } from 'react-redux'
import TreeRoot from './TreeRoot'

const Tree = () => {
  const content = useSelector((state) => state.tree.content)
  const categories = [...new Set(content.map((item) => item.category))]
  return (
    <div className="tree-root-container">
      <TreeRoot content={content} categories={categories} />
    </div>
  )
}

export default Tree
