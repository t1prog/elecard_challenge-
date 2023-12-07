import React from 'react'
import { Dialog, DialogContent } from '@mui/material'

export default function Modal({ openModal, image, handleClose }) {
  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <img
          src={image}
          alt=""
          style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
        />
      </DialogContent>
    </Dialog>
  )
}
