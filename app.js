const express = require("express");
// const router = require("./src/routes/api.js");
const app = new express();
const rateLimit = require("express-rate-limit")
const sanitiez = require("express-mongo-sanitize")
const xss = require("xss-clean")
const hpp = require("hpp")
const cors = require("cors");
const helmet = require("helmet");




app.use(cors())
app.use(helmet())
app.use(helmet())
app.use(sanitiez())
app.use(xss())
app.use(hpp())

const Limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100
});
app.use(Limiter);




// app.use("/api/v1",router)


//==== MongoDB Connection =====

// mongoose
//     .connect(process.env.DATABASE)
//     .then( () => console.log("DB Connectted"))
//     .catch( (err) =>console.log("DB Error",err));


//Undefine Route...

app.use("*",(req,res)=>{
    res.status(404).json({Status:"Faild",Data:"Not Found"})
})


module.exports=app;