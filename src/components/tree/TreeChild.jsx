import { useState } from 'react'
import TreeGrandChild from './TreeGrandChild'
import '../../style/index.scss'

const TreeChild = ({ ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { id } = props

  const expandedHandle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <li id={`tree-item-${id}`} className="tree-root__child-item">
      <div
        onClick={expandedHandle}
        className={`tree-root__item-label ${isExpanded ? 'expanded' : ''}`}
      >
        {isExpanded ? '▼' : '►'}
        <span>Child: {id}</span>
      </div>
      {isExpanded && <TreeGrandChild {...props} />}
    </li>
  )
}

export default TreeChild

