import React from 'react'

const TreeItem = ({ id, image, filesize, timestamp, category }) => {
  return (
    <li>
      {id}
      <strong>Image:</strong> {image},{' '}
      <strong>Filesize:</strong> {filesize} bytes,{' '}
      <strong>Timestamp:</strong> {timestamp},{' '}
      <strong>Category:</strong> {category}
    </li>
  )
}

export default TreeItem
