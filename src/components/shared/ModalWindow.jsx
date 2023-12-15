import { Dialog, DialogContent, styled } from '@mui/material'
import useNoScrollEffect from '../../hooks/useNoScrollEffect'
import CloseBtn from './CloseBtn'

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
}))

const ModalWindow = ({ openModal, image, handleClose }) => {
  useNoScrollEffect(openModal, document.documentElement)

  return (
    <CustomDialog
      className="modal"
      disableScrollLock={true}
      open={openModal}
      onClose={handleClose}
      onClick={handleClose}
      maxWidth={'md'}
    >
      <DialogContent className="modal-content">
        <CloseBtn handle={handleClose} background={false} />
        <img src={image} alt={image} />
      </DialogContent>
    </CustomDialog>
  )
}

export default ModalWindow
