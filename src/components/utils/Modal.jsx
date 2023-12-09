import { Dialog, DialogContent, styled } from '@mui/material'

const MyCustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
}))

export default function Modal({ openModal, image, handleClose }) {
  return (
    <MyCustomDialog
      disableScrollLock={true}
      open={openModal}
      onClose={handleClose}
      repositionOnUpdate={false}
      style={{ padding: '0px 0px 0px 0px' }}
    >
      <DialogContent className="modal-content">
        <img src={image} alt={image} />
      </DialogContent>
    </MyCustomDialog>
  )
}
