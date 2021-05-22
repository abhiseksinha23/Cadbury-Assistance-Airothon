const express = require('express');
const app = express();
const router= express.Router()
const Announcement = require('../models/Announcement')
const mongoose = require('mongoose')

/*const { AnnouncementSchema } = require('../models/Announcement');
const Announcement = mongoose.model("Announcement", AnnouncementSchema);
*/
let date= new Date();
//console.log(date.getDate());

router.get('/activeAnnouncements',async(req,res)=>{
    try{
        const announcements = await Announcement.find()
        let activeAnnouncements=[];
        announcements.forEach(element =>{
                if(element.isActive)
                    activeAnnouncements.push(element);
        });
        res.send(activeAnnouncements);
    }catch(err){
        res.send('Error : '+err)
    }
    
});
router.get('/allAnnouncements',async(req,res)=>{
    try{
        const announcements = await Announcement.find()
        res.json(announcements)
    }catch(err){
        res.send('Error : '+err)
    }
});

router.post('/', async(req,res)=>{
    if((req.body.Subject==null || req.body.Subject.length<3) && (req.body.Description==null || req.body.Description.length<10))
        return res.status(400).send("Subject length must not be less than 3 characters and Description length must not be less than 10 characters");
    else if(req.body.Subject==null || req.body.Subject.length<3)
        return res.status(400).send("Subject length must not be less than 3 characters");
    else if(req.body.Description==null || req.body.Description.length<10)
        return res.status(400).send("Description length must not be less than 10 characters");
    date=new Date();
    try
    {    
        const announcement = new Announcement({
            Subject: req.body.Subject,
            Description: req.body.Description,
            Date: date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
            isActive: true
        })
        const a1=await announcement.save();
        res.json(announcement);
    }catch(err){
        res.send('Error: '+err);
    }
});

router.get('/:id', async(req,res)=>{
    
    try{
        const announcement = await Announcement.findById(req.params.id)
        res.json(announcement)
    }catch(err){
        res.send('Error '+err)
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        var announcement = await Announcement.findById(req.params.id)
        announcement.isActive=false
        const a1=await announcement.save();
        res.json(a1)
    }catch(err){
        res.send('Error '+err)
    }

});

router.patch('/:id',async(req,res)=> {
    try{
        const announcement = await Announcement.findById(req.params.id) 
        announcement.Subject = req.body.Subject 
        announcement.Description = req.body.Description 
        date=new Date();
        announcement.Date =date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
        const a1 = await announcement.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports= router