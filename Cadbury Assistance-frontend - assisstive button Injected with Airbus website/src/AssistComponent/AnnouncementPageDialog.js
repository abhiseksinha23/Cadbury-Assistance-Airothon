import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import AnnouncementPage from '../AnnouncementPage'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function FormDialog( {data} ) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}> <span style={{ fontSize: '1.5rem' }}><ArrowForwardIosIcon/></span></div>
      <Dialog fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent style={{padding:0}}>
            <AnnouncementPage/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
