import { PATH_TO_IMG } from '../../services/constants'

const ThumbnailImage = ({ image, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="thumbnail">
          <div className="thumbnail-item">
            <img src={PATH_TO_IMG + image} alt={PATH_TO_IMG + image} />
          </div>
        </div>
      )}
    </>
  )
}

export default ThumbnailImage
