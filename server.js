var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended : false
    })
)
const mongoURI = 'mongodb://127.0.0.1:27017/LoginReg-MERN'

mongoose.connect(mongoURI,{useNewUrlParser : true});
const connection = mongoose.connection;

connection.once('open',function(){
    console.log("MongoDB DB Connection established succesfully");
})





var Users = require('./routes/Users')

app.use('/userss',Users)

app.listen(port,() =>{
    console.log("Server is running on port " + port)
})

