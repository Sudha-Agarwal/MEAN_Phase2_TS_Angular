var express = require('express');
var api = express.Router();
const fs = require('fs');

api.get('/data', (req, res) => {
    console.log("get request");
    fs.readFile(__dirname + '/data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        console.log("data found");
        const jsonData = JSON.parse(data);
        console.log(jsonData);
        res.json(jsonData);
      }
    });
  });

  api.post('/check-login', function(req,res){
    console.log("login check called");
    var username = req.body.username;
    var password = req.body.password;

    console.log(username + " " + password);

    if(username==="user" && password ==="123456"){
      res.send(true);
    }
    else{
      res.send(false);
    }
  });

  



  module.exports = api;