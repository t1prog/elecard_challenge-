import TreeChild from './TreeChild'
import { useState } from 'react'
import '../../style/index.scss'

const TreeRoot = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandedHandle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div>
      <div
        onClick={expandedHandle}
        className={`tree-root__item-label ${isExpanded ? 'expanded' : ''}`}
      >
        {isExpanded ? '▼' : '►'} Root
      </div>
      {isExpanded && (
        <ul className="tree-root__child">
          {content.map((item) => (
            <TreeChild key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TreeRoot