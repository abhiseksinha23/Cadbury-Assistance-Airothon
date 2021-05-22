import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {GoTools} from "react-icons/go"
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Konnex
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Improvements() {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [open, setOpen] = React.useState(false);
  const [serverity, setServerity] = React.useState('error');
  const [message, setMessage] = React.useState('Incorrect Data');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    const improvement = {
      "topic": title,
      "detail": details
    }
    axios.post(`https://application-imp.herokuapp.com/improvement`, improvement )
      .then(res => {
        setTitle('');
        setDetails('');
        setOpen(true);
        setServerity('success');
        setMessage('Post uploaded succesfully');
      })
      .catch(
        error => {
        setTitle('');
        setDetails('');
        setOpen(true);
        setServerity('error');
        setMessage('Incorrect/Incomplete Data');
      })      
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GoTools />
        </Avatar>
        <Typography component="h1" variant="h5">
          Improvements
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoComplete="title"
                onChange={e => setTitle(e.target.value)}
                value={title}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="details"
                label="Details"
                type="text"
                id="details"
                autoComplete="current-password"
                onChange={e => setDetails(e.target.value)}
                value={details}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Post
          </Button>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={serverity}>
              {message}
            </Alert>
          </Snackbar>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
