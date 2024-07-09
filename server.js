// step1: create a server
//step2: move into that folder 
//step3: npm init -y
//step4: open folder using VSCode
//step5: npm i express
//step6: create server.js


//server instantiate
const express = require('express'); //creating server using express
const app = express();// server named app created

//used to parse request body in express in case of PUT or POST
const bodyParser = require('body-parser');

//specifically parse JSON data and add it to the request.body object
app.use(bodyParser.json());

//telling server about port and what action/behaviour to do
//activate the server on 3000 port
app.listen(8000, ()=> {
    console.log("server started at port no:8000")
})
//create a route to see above in web page ,"/" is a route
app.get('/',(request,response)=> {
    response.send("hello everyone")
})


app.post('/api/cars',(request,response)=>{
    const {name,brand}=request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted succesfully")
})


// to connect express.js and mongoDB moongoose is used 
// it is an ODM libraray
// in express obj treated as object and in mongodb object is treated as doc
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase',{
   useNewurlParser:true,
   useUnifiedTopology:true
})
.then((=> console.log{"connection succesful"}));
.catch((_error)=>{console.log("recieved an error")});
