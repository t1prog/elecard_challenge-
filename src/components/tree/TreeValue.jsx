import { useState } from 'react'
import { PATH_TO_IMG } from '../../services/constants'
import useDateTime from '../../hooks/useDataTime'
import useFileSize from '../../hooks/useFileSize'
import ModalWindow from '../shared/ModalWindow'
import ThumbnailImage from '../shared/ThumbnailImage'

const TreeValue = ({ item }) => {
  const [openModal, setOpenModal] = useState(false)
  const [openThumbnail, setOpenThumbnail] = useState(false)

  const modalOpenHandle = () => {
    setOpenModal(true)
  }

  const modalCloseHandle = () => {
    setOpenModal(false)
  }

  const handleFocus = () => {
    setOpenThumbnail(true)
  }

  const handleBlur = () => {
    setOpenThumbnail(false)
  }

  return (
    <>
      <li className="tree-root__lastchild-value">
        filesize: {useFileSize(item.filesize)} KB
      </li>
      <li className="tree-root__lastchild-value">
        datatime: {useDateTime(item.timestamp)}
      </li>
      <li>
        <div
          className="tree-root__lastchild-value"
          tabIndex="0"
          onMouseEnter={handleFocus}
          onMouseLeave={handleBlur}
          style={{
            position: 'relative',
          }}
        >
          image: {item.image}
          <div
            onClick={modalOpenHandle}
            style={{
              cursor: 'pointer',
            }}
          >
            <ThumbnailImage image={item.image} isOpen={openThumbnail} />
          </div>
        </div>
      </li>
      <ModalWindow
        openModal={openModal}
        image={PATH_TO_IMG + item.image}
        handleClose={modalCloseHandle}
      />
    </>
  )
}
export default TreeValue
