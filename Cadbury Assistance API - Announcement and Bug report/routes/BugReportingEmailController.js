const express = require('express');
const router= express.Router()
var nodemailer = require('nodemailer');
const Case = require('../models/Case')
const mongoose = require('mongoose')

//team mail
const sender='symbolicdemon.help@gmail.com';
//admin mail
const admin='das.sudeept@gmail.com';

let date= new Date();
//console.log(date.getDate());

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth: {
        user: sender,
        pass: 'Jan@2021'//Enter password
    }
});

router.get('/activeCases',async(req,res)=>{
    try{
        const cases = await Case.find()
        var activeCases=[];
        cases.forEach(element =>{
            if(element.isActive)
                activeCases.push(element);
        });
        res.send(activeCases);
    }catch(err){
        res.send('Error : '+err)
    }
    
});
router.get('/allCases',async(req,res)=>{
    try{
        const cases = await Case.find()
        res.json(cases)
    }catch(err){
        res.send('Error : '+err)
    }
});

router.post('/', async(req,res)=>{
    if(req.body.Description==null || req.body.Description.length<10)
        return res.status(400).send("Description length must not be less than 10 characters");
    date=new Date();
    try
    {

        const cases = await Case.find()
        console.log(cases.length)
        const scase = new Case({
            Subject: "INC"+((cases.length+1).toString()),
            Description: req.body.Description,
            Date: date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
            isActive: true,
            Status:"In_Progress",
            CustomerEmail: req.body.CustomerEmail
        })
        console.log(req.body.Description);

        var reciever= req.body.CustomerEmail;
        var subject= scase.Subject;
        var message= req.body.Description;

        var mailOptions1 ={
            from: sender,
            to: reciever,
            subject: "Incident created with incident No.:"+subject,
            text: "Hi Users, \n\nIncident "+subject+" is created with  description: \n"+ message+".\n Our admin will soon start working with this request.\nOur admin will contact you through mail if any information is needed from your end.  \n\nThanking you,\nSymbolic Demons\n"+sender
        }

        var mailOptions2 ={
            from: sender,
            to: admin,
            subject: subject+"has been reported",
            text: "Hi Team, \n\nIncident "+subject+" is created with  description: \n"+ message+".\nCustomer Email: "+reciever+"\nPlease start resolving the incident as soon as possible and contact customer through mail if additional information needed.  \n\nThanking you,\nSymbolic Demons\n"+sender
        }

        let fl=true;
        let errorms;
        transporter.sendMail(mailOptions1, function(error,info){
            if(error)
            {
                fl=false;
                errorms=error;
            }
        });
        transporter.sendMail(mailOptions2, function(error,info){
            if(error)
            {
                fl=false;
                errorms=error;
            }
        });
        if(!fl)
            return res.status(400).send(errorms);
        else 
        {
            const a1= await scase.save();
            res.json(a1);
        }
    }catch(err)
    {
        res.send(err);
    }
});

router.get('/:id', async(req,res)=>{

    try{
        const scase = await Case.findById(req.params.id)
        res.json(scase)
    }catch(err){
        res.send('Error '+err)
    }

});

router.delete('/:id',async(req,res)=>{
    try{
        const scase = await Case.findById(req.params.id)
        if(!scase)
            return res.status(404).send('The course with given id was not found');

        var reciever= scase.CustomerEmail;
        var subject= scase.Subject;
        var message= scase.Description;

        var mailOptions ={
            from: sender,
            to: reciever,
            subject: subject+" has been resolved",
            text: "Hi User,\n\nOur Admin has resolved this issue.\nIn case the issue happens again kindly report bug again.\n\nThanking you,\nSymbolic Demons"
        }

        let fl=true;
        let errorms;
        transporter.sendMail(mailOptions, function(error,info){
            if(error)
            {
                fl=false;
                errorms=error;
            }
        });
        if(!fl)
            return res.status(400).send(error);
        else 
        {
            scase.isActive=false;
            const a1=await scase.save()
            res.json(a1);
        }
    }catch(err){
        res.send('Error: '+ err);
    }
});

router.patch('/:id',async(req,res)=> {
    try{
        const scase = await Case.findById(req.params.id) 
        scase.Description = req.body.Description 
        date=new Date();
        scase.Date =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
        scase.Status=req.body.Status
        const a1 = await scase.save()
        res.json(a1)   
    }catch(err){
        res.send('Error: '+err)
    }

})

module.exports= router