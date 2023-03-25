const express = require('express');
const app=  express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/idx.html');
})

app.get('/style1.css',(req,res)=>{
    res.sendFile(__dirname + '/style1.css');
})
app.listen(3000,()=>{
    console.log("server is running");
})

/*GET : TO GET THE DATA FROM THE SERVER/BACKEND,POST:FRONT END TO BACKEND ,
PUT : UPDATION,PATCH : UPDATION ,DELETE : DELETE THE DATA */

/*STATUS CODES : 200-400 : SUCCESS , 400-500 : FAILURE
200: OKAY ,  201:USED WITH POST REQUEST, 
404: NOT FOUND, 500: ERROR IN FETCHING THE DATA FROM THE SERVER  */