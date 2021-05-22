import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {GoBug} from "react-icons/go"
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
    backgroundColor: "#00D100",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function BugReport() {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

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
    console.log(email, description);
    const bug = {
      "CustomerEmail": email,
      "Description": description
    }

    axios.post(`https://nodejs-bug-and-announcement.herokuapp.com/cases/`, bug )
      .then(res => {
        setEmail('');
        setDescription('');
        console.log(res);
        setOpen(true);
        setServerity('success');
        setMessage('Bug reported succesfully');
      })
      .catch(
        error => {
        setEmail('');
        setDescription('');
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
          <GoBug />
        </Avatar>
        <Typography component="h1" variant="h5">
          Bug Report
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="description"
                label="Description"
                type="text"
                id="description"
                autoComplete="current-password"
                onChange={e => setDescription(e.target.value)}
                value={description}
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
            Report
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
