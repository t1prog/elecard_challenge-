import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useDateTime from '../../hooks/useDataTime'
import useFileSize from '../../hooks/useFileSize'
import ThumbnailImage from '../shared/ThumbnailImage'
import { handleModal, setCurrent } from '../../store/modal/modal.slice'

const TreeValue = ({ item }) => {
  const [openThumbnail, setOpenThumbnail] = useState(false)
  const dispatch = useDispatch()

  const handleFocus = () => {
    setOpenThumbnail(true)
  }

  const handleBlur = () => {
    setOpenThumbnail(false)
  }

  const openModal = () => {
    dispatch(setCurrent(item.id - 1))
    dispatch(handleModal())
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
          <div onClick={() => openModal()}>
            <ThumbnailImage image={item.image} isOpen={openThumbnail} />
          </div>
        </div>
      </li>
    </>
  )
}
export default TreeValue
