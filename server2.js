// to connect express.js and mongoDB moongoose is used 
// it is an ODM libraray
// in express obj treated as object and in mongodb object is treated as doc
 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewurlParser:true,
    useUnifiedTopology:true
 })
.then((=> {console.log("connection successful")}))
.catch((error)=>{console.log("recieved an error")})