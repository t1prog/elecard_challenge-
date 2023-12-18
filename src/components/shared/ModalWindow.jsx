import { Dialog, DialogContent, styled } from '@mui/material'
import useNoScrollEffect from '../../hooks/useNoScrollEffect'
import CloseBtn from './CloseBtn'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { handleModal } from '../../store/modal/modal.slice'
import { PATH_TO_IMG } from '../../services/constants'

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
}))

const ModalWindow = ({ images }) => {
  const { isOpen, current } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  const [currImage, setCurrImage] = useState(0)
  useNoScrollEffect(isOpen, document.documentElement)

  useEffect(() => {
    setCurrImage(current)
  }, [current])

  const handlePrev = () => {
    setCurrImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleKeyUp = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev()
    } else if (e.key === 'ArrowRight') {
      handleNext()
    }
  }
  return (
    <CustomDialog
      className="modal"
      disableScrollLock={true}
      open={isOpen}
      onClose={() => dispatch(handleModal())}
      onKeyUp={handleKeyUp}
      tabIndex="0"
      maxWidth={'lg'}
    >
      <DialogContent className="modal-content">
        <CloseBtn handle={() => dispatch(handleModal())} background={false} />
        <img src={PATH_TO_IMG + images[currImage]} alt={images[currImage]} />
        <div className="modal__prev-page-btn">
          <span onClick={handlePrev}>&#8592;</span>
        </div>
        <div className="modal__next-page-btn">
          <span onClick={handleNext}>&#8594;</span>
        </div>
      </DialogContent>
    </CustomDialog>
  )
}

export default ModalWindow
