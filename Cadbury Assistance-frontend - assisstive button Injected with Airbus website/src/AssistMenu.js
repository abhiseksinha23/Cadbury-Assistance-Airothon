import React from "react";
import { AssistiveTouch } from "react-assistivetouch-menu";
import ChatDialog from './AssistComponent/ChatDialog';
import NavigationDialog from './AssistComponent/NavigationDialog';
import ImprovementsDialog from './AssistComponent/ImprovementDialog';
import Announcements from './AssistComponent/AnnouncementDialog';
import BugReportDialog from './AssistComponent/BugReportDialog';
import {GoInfo} from "react-icons/go";


import SpeechRecognition from './SpeechRecognition'

const redirectInformation=()=>{
  window.location.assign('https://www.airbus.com/');
}


function getMenuItems() {

  return [    
    {
      icon: <div className="menuitem"><SpeechRecognition  redirectInformation={redirectInformation} /></div>,      
    },    
    {
      icon: <div className="menuitem"><BugReportDialog/></div>,      
      label: <span style={{ fontSize: '0.7rem' }}>Bug Report</span>
    },
    {
      icon: <div className="menuitem" ><ChatDialog/></div>,      
      label: <span style={{ fontSize: '0.7rem' }}>ChatBot</span>
    },
    {
      icon: <div className="menuitem"><ImprovementsDialog/></div>,      
      label: <span style={{ fontSize: '0.7rem' }}>Improvements</span>
    },
    {
      icon: <div className="menuitem"><Announcements/></div>,
      label: <span style={{ fontSize: '0.7rem' }}>Announcements</span>
    }, 
    {
      icon: <div className="menuitem" ><NavigationDialog/></div>,
      label: <span style={{ fontSize: '0.7rem' }}>Navigation</span>
    }, 
    {
      icon: <div className="menuitem" onClick={redirectInformation}>
              <span style={{ fontSize: '1.5rem' }}><GoInfo/></span>
            </div>,      
      label: <span style={{ fontSize: '0.7rem' }}>Information</span>
    },        
  ];
}
 
export default function AssistMenu() {
  
  return (
    <div>
        <AssistiveTouch size="XL" behaviour="snapToSides" initialPos={{ left: 0, top: 200 }} menuItems={getMenuItems()}/>  
    </div>
  );
}
