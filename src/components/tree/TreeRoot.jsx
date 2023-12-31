import TreeFirstChild from './TreeFirstChild'
import { useState } from 'react'

const TreeRoot = ({ content, categories }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandedHandle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div>
      <div className={`tree-root__label ${isExpanded ? 'expanded' : ''}`}>
        <span className="tree-root__toggler" onClick={expandedHandle}>
          {isExpanded ? '▼' : '►'} Root
        </span>
      </div>
      {isExpanded && (
        <ul className="tree-root__child">
          {categories.map((category) => (
            <TreeFirstChild key={category} content={content} category={category} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TreeRoot
