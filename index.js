const app = require("./app");
const mongoose = require('mongoose');
const dotenv = require("dotenv")
dotenv.config({path:"./.env"})





// server......
const port =process.env.PORT || 8080;

//Connect mongodb and satrt server
mongoose
    .set('strictQuery', false)
    .connect(process.env.DATABASE)    
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Server Running on port ${port}`);
        });
    })
    .catch((err)=> console.log(err));
