const express=require("express");
const app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("routes/uploads"))
const mongoose=require("mongoose");
const session = require("express-session");
mongoose.connect("mongodb://127.0.0.1:27017/CrudApp").then((result)=>{
    console.log("Database connected with server..");
}).catch((err)=>{
    console.log("Issue in connecting server..",err);
})
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:"ab123@f6#12v"
}))
app.use((req,res,next)=>{
    res.locals.message=req.session.message;
    delete req.session.message;
    next();
})
app.use("",require("./routes/routes.js"));
app.listen(5005,(req,res)=>{
    console.log("server is running on port 5005...");
})