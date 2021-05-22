import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {MdAnnouncement} from "react-icons/md"
import { DialogActions, DialogTitle, makeStyles } from '@material-ui/core';
import Announcements from '../Announcements';
import IconButton from '@material-ui/core/IconButton';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AnnouncementPageDialog from './AnnouncementPageDialog'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FF8C00",
  },
}));

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [read, setRead] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRead = () => {
    setRead(false);
  }
  
  return (
    <div>
      <div onClick={handleClickOpen}> <span style={{ fontSize: '1.5rem' }}><MdAnnouncement/></span> </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <MdAnnouncement />
              </Avatar>
              <Typography component="h1" variant="h5">
                Announcements
              </Typography>
              </div>
          </Container>
        </DialogTitle>
        <DialogContent style={{minHeight: '40vh',maxHeight: '40vh'}}>
          <Announcements isRead={read}/>          
        </DialogContent>
        <DialogActions>
          <IconButton
              aria-label="close"
              color="inherit"
              size="medium"
              onClick={handleRead}
          >
            <DraftsIcon fontSize="inherit" />
          </IconButton>
          <AnnouncementPageDialog/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
