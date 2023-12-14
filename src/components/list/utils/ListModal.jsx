import { Dialog, DialogContent, styled } from '@mui/material'

const MyCustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(1),
  },
}))

const ListModal = ({ openModal, image, handleClose }) => {
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

export default ListModal
