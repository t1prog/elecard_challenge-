import React from 'react'
import TreeLastChild from './TreeLastChild'

const TreeGrandChild = ({ image, filesize, timestamp, category }) => {
  return (
    <ul className="tree-root__grandchild">
      <TreeLastChild label="image" content={image} />
      <TreeLastChild label="filesize" content={filesize} />
      <TreeLastChild label="timestamp" content={timestamp} />
      <TreeLastChild label="category" content={category} />
    </ul>
  )
}

export default TreeGrandChild
