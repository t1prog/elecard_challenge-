import { useState } from 'react'

const TreeLastChild = ({ label, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandedHandle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <li className="tree-root__lastchild-item">
      <div
        onClick={expandedHandle}
        className={`tree-root__item-label ${isExpanded ? 'expanded' : ''}`}
      >
        {isExpanded ? '▼' : '►'}
        {label}
        {isExpanded && (
          <ul className="tree-root__lastchild-value">
            <li>value: {content}</li>
          </ul>
        )}
      </div>
    </li>
  )
}

export default TreeLastChild
