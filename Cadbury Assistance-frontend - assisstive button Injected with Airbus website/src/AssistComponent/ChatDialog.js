import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Chat from './chatbot/Chat'
import {GoHubot} from "react-icons/go"
import {MdAndroid} from "react-icons/md"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleClickOpen}> <span style={{ fontSize: '1.5rem' }}><MdAndroid/></span> </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <AppBar position="static">
          <Toolbar style={{background:'#6C63FF'}}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <GoHubot />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Chat Bot
            </Typography>         
          </Toolbar>
        </AppBar>
        <DialogContent style={{padding:0}}>
          <Chat/>
        </DialogContent>
      </Dialog>
    </div>
  );
}
