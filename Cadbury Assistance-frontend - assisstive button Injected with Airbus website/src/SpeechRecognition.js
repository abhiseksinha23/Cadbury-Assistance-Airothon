import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import {MdMic, MdMicNone} from "react-icons/md"

const SpeechRecognitionApp = ({redirectInformation}) => {
 const [message, setMessage] = useState('');
 const commands = [
   {
     command: 'reset',
     callback: () => resetTranscript()
   },
   {
     command: 'shut up',
     callback: () => setMessage('I wasn\'t talking.')
   },
   {
     command: 'Hello',
     callback: () => setMessage('Hi there!')
   },
   {
    command: 'information',
    callback: redirectInformation
   },
   
 ]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition({ commands });


 const [listenStatus, setListenStatus] = useState(false);
 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
  listenStatus === false ?
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
   }):
   SpeechRecognition.startListening({
    continuous: false,
    language: 'en-GB',
  });
 };
 return (
   <div>
     <div>
        <div type="button" onClick={() => {listenContinuously(listenStatus); setListenStatus(listening);}}>
        <span style={{ fontSize: '1.5rem' }}>{listening ? <MdMic/>:<MdMicNone/>}</span>
        </div>

       <span style={{ fontSize: '0.8rem' }}>
         listening:
         {' '}
         {listening ? 'on' : 'off'}</span>
     </div>
     {/* <div>
       {message}
     </div>
     <div>
       <span>{transcript}</span>
     </div> */}
   </div>
 );
};

export default SpeechRecognitionApp;