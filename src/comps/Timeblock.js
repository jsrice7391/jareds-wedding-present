import React from "react";
import TimelineItem from '@material-ui/lab/TimelineItem';
import { makeStyles } from '@material-ui/core/styles';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { AirplanemodeActive, Favorite, Gavel, PhoneIphone } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  
const get_icon = (icon) =>{

    switch(icon){
        case "favorite":
            return <Favorite/>
        case "airplane":
            return <AirplanemodeActive/>
        case "gavel":
            return <Gavel/>
        case "phone":
            return <PhoneIphone/>
        default:

            return <FastfoodIcon/>
    }
}

export const Timeblock = (props) => {

    const classes = useStyles();
   return <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            {props.date}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            {get_icon(props.icon)}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              {props.title}
            </Typography>
            <Typography>{props.subtext}</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
}