const express=require("express");
const path=require("path");
const router = express.Router();
const users = require("../models/users");
const multer = require("multer");
//const ObjectId = require("mongoose").Types;
router.use(express.urlencoded({extended:true}));
const mongoose = require("mongoose");
const mstorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(__dirname,"/uploads"));
    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname);
    }
})
const upload = multer({storage:mstorage}).single("image");
router.get("/",(req,res)=>{
    res.render("index");
})
router.post("/add",upload,(req,res)=>{
    const userObj = new users({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        image:req.file.filename
    });
    userObj.save().then((result)=>{
        req.session.message={
            type:"success",
            message:"User added successfully"
        };
        res.redirect("/showTable"); 
    }).catch((e)=>{
        console.log(e);
        res.json({message:e.message, type:"danger"});
    })
})
router.get("/edit/:id",(req,res)=>{
    let id=req.params.id;
    users.findOne({"_id":new mongoose.Types.ObjectId(id)}).then((result)=>{
        if(result.length==0){
            res.redirect("/showTable");
        }
        else{
            res.render("editPage",{user:result});
        }
    }).catch((err)=>{
        res.render("/showTable");
    })
})
router.get("/add",(req,res)=>{
    res.render("index");
})
router.get("/showTable",(req,res)=>{
    users.find().then((result)=>{
        res.render("showPage",{arr:result}); 
    })
    
})
router.post("/update/:id",upload,(req,res)=>{
    let id=req.params.id;
    let new_image = "";
    if(req.file){
        new_image=req.file.filename;
    }
    else{
        new_image=req.body.old_image;
    }
    users.updateMany({"_id":id},{
        "name":req.body.name,
        "email":req.body.email,
        "phone":req.body.phone,
        "image":new_image
    }).then((result)=>{
        res.redirect("/showTable");
    })
})
router.get("/delete/:id",(req,res)=>{
    let id=req.params.id;
    users.findOne({"_id":new mongoose.Types.ObjectId(id)}).then((result)=>{
        res.render("deletePage",{user:result});
    })
})
router.post("/deleted/:id",(req,res)=>{
    let id=req.params.id;
    users.deleteMany({"_id":new mongoose.Types.ObjectId(id)}).then((result)=>{
        res.redirect("/showTable");
    })
})
//router.post("")
module.exports=router;