import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Navigation from "../Navigation"
import {MdSearch} from "react-icons/md"
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
      <div onClick={handleClickOpen}> <span style={{ fontSize: '1.5rem' }}><MdSearch/></span> </div>
      <Dialog maxWidth="md" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
            <Navigation/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
