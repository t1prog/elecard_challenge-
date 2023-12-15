import { useState } from 'react'
import TreeValue from './TreeValue'

const TreeGrandChild = ({ filename, item }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandedHandle = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <li className="tree-root__grandchild">
      <div className={`tree-root__label ${isExpanded ? 'expanded' : ''}`}>
        <span className="tree-root__toggler" onClick={expandedHandle}>
          {isExpanded ? '▼' : '►'} {filename}
        </span>
      </div>
      {isExpanded && (
        <ul className="tree-root__child">
          <TreeValue item={item} />
        </ul>
      )}
    </li>
  )
}

export default TreeGrandChild
