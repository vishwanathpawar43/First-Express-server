const express=require("express");
const { request } = require("http");
const app = express();

app.get("/",function(req,res){
    res.send("hii");
});

app.get("/contact",function(req,res){
    res.send("Warriors 2022 champs");
});

app.get("/warriors",function(req,res){
    res.send("Warriors 2022 champs");
});


app.listen(3000, function () {
    console.log("Server running on port 3000");
});