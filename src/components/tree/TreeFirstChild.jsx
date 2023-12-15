import { useState } from 'react'
import TreeGrandChild from './TreeGrandChild'

const TreeFirstChild = ({ content, category }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandedHandle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <li className="tree-root__child-item">
      <div className={`tree-root__label ${isExpanded ? 'expanded' : ''}`}>
        <span className="tree-root__toggler" onClick={expandedHandle}>
          {isExpanded ? '▼' : '►'} {category}
        </span>
      </div>
      {isExpanded && (
        <ul className="tree-root__child">
          {content.map(
            (item) =>
              item.category === category && (
                <TreeGrandChild key={item.id} filename={item.filename} item={item} />
              )
          )}
        </ul>
      )}
    </li>
  )
}

export default TreeFirstChild
