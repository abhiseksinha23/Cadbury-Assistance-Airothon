import React from 'react';
import {GoBug} from "react-icons/go"
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import BugReports from '../BugReport'

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
      <div onClick={handleClickOpen}> <span style={{ fontSize: '1.5rem' }}><GoBug/></span> </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <BugReports/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
