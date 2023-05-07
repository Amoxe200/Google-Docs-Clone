const express = require('express');
const { request } = require('http');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');

const PORT = process.env.PORT | 3001;

const app = express();

//Whatever data is coming it will be converted to JSON and sent to the Server
app.use(express.json());
app.use(authRouter);

//Connect with Mogodb Database
const DB = "mongodb+srv://Amoxe:Aiman123456@cluster0.zteehnb.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(DB).then(() => {
 console.log("Connection Succeful!");   
}).catch((err) => {
    console.log(err);
});


app.listen(PORT, "0.0.0.0", () => {
    console.log("Server Is Running at Port :", PORT);
});