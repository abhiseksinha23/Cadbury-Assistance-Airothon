import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
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
}));

export default function TransitionAlerts(props) {
  const classes = useStyles();
  const [ allAnnouncementsprops, setAllAnnouncementsprops] = useState([])
  const fetchRandomURLs = () => {
      return axios.get(`https://nodejs-bug-and-announcement.herokuapp.com/announcements/activeAnnouncements`)
            .then(res => {setAllAnnouncementsprops(res.data)})
            .catch(err => {console.error(err)})    
  }

  useEffect (() => {
      fetchRandomURLs();
  },[])


  const allAnnouncements = allAnnouncementsprops.map((element) => { 
    return (
    <React.Fragment key={element._id}>
    <Alert>
      {element.Subject}
    </Alert>
    <br/>
    </React.Fragment>
    )
  });

  return (
    <div className={classes.root}>         
      {allAnnouncementsprops &&

      <Collapse in={props.isRead}>
        {allAnnouncements}
      </Collapse>

      }
    </div>
  );
}
