import React,{useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia
} from "@material-ui/core";
import { red } from '@material-ui/core/colors';
import axios from 'axios';
import clsx from 'clsx';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    flexGrow: 1,
    color:"#FFFFFF",
    justify:"center"
  },
}));

export default function AltCard(props) {

    const [imageUrls, setImageUrls] = useState([]);
    const fetchRandomURLs = () => {
        return axios.get(`https://picsum.photos/v2/list`)
              .then(res => {setImageUrls(res)})
              .catch(err => {console.error(err)})    
    }
    const [ allAnnouncementsprops, setAllAnnouncementsprops] = useState([])
    const fetchAnnouncementURLs = () => {
        return axios.get(`https://nodejs-bug-and-announcement.herokuapp.com/announcements/activeAnnouncements`)
              .then(res => {setAllAnnouncementsprops(res.data)})
              .catch(err => {console.error(err)})    
    }
  
    useEffect (() => {
        fetchRandomURLs();
    },[])
    useEffect (() => {
      fetchAnnouncementURLs();
    },[])

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div className={classes.root}>
        <AppBar position="static" style={{color:"#302B54"}}>
            <Toolbar>
            <Typography variant="h5" className={classes.title}>
                Konnex Announcements
            </Typography>
            </Toolbar>
        </AppBar>
        <br/>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
        {console.log("props",props.data)}

        {imageUrls.data && 
         allAnnouncementsprops.map((elem) => (

            <Grid item xs={4} key={elem.id}>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {elem.Subject.substr(0, 1).toUpperCase()}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={elem.Subject}
                    subheader={elem.Date}
                />
                <CardMedia
                    className={classes.media}
                    image={imageUrls.data[ Math.floor(Math.random() * 30) ].download_url}
                    title=""
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {elem.Description.substr(0, 100)}...
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon />
                    </IconButton> */}
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Full Post:</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {elem.Description}                    
                    </Typography>                   
                    </CardContent>
                </Collapse>
            </Card>
            </Grid>
          ))}
        </Grid>
    </div>
  );
}