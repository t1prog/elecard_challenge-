import { Dialog, DialogContent } from '@mui/material'
import '../../style/components/modal.scss'

export default function Modal({ openModal, image, handleClose }) {
  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent className="modal-content">
        <img src={image} alt="" />
      </DialogContent>
    </Dialog>
  )
}
