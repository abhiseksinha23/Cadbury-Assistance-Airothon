import React from 'react';
import {GoTools} from "react-icons/go"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Improvements from '../Improvements'

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}> <span style={{ fontSize: '1.5rem' }}><GoTools/></span> </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
            <Improvements/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
