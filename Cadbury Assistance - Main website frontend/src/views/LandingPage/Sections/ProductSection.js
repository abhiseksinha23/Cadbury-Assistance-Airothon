import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Android";
import Search from "@material-ui/icons/Search";
import Announcement from "@material-ui/icons/Announcement";
import BugReport from "@material-ui/icons/BugReport";
import Report from "@material-ui/icons/FileCopy";
import Tools from "@material-ui/icons/PanToolSharp";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="contact-page1">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk product</h2>
          <h5 className={classes.description}>
          KONNEX helps you make your way through complex webapps,applications,websites in a smarter way.
          It comes with 6 out of the Box features which makes  user experience on your application 10 times better
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Chat Bot"
              description="ChatBot  software simulates human-like conversations with users via text messages on chat. Its key task is to help users by providing answers to their quries"
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Search Tool"
              description="Search for words or phrases related to your products or services. Our keyword research tool will help your customer find the details on your website."
              icon={Search}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Annoucement Section"
              description="You can create an announcement to share important information with all users with the help of our announcement section."
              icon={Announcement}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Bug Report"
              description="The aim of bug report is to give user a platform to send an issue faced by him on the website to the developer team  to aid overall project development. ."
              icon={BugReport}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Performance Report"
              description="Performance report provides real-time information about the performance of the application, it can be used to reshape strategic assumptions and setting"
              icon={Report}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Innovation & Co-Creation"
              description="Customer co-creation can lead to some great innovations,we provide a platform for creative disscusion's to make your product better."
              icon={Tools}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
