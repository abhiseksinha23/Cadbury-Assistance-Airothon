const express = require('express');
const mongoose = require('mongoose')
const app= express()
var nodemailer = require('nodemailer');

const uri = "mongodb+srv://abhisekkumar:passcode23@internproject-zscmu.mongodb.net/Airbus?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json())

app.get('/', (req,res)=>{
    res.send('Hello Users');
});
const announcementRouter = require('./routes/AnnouncementController')
app.use('/announcements',announcementRouter)

const BugReportingRouter = require('./routes/BugReportingEmailController')
app.use('/cases',BugReportingRouter)


const port= process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Listening on port ${port}`)); 