var express = require('express');
var router = express.Router();

var randn1 = Math.random()*100;
//var randn2 = Math.random()*100;
var value1=0;
var value2=0;
var value3=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  num1=Math.log2(randn1);
  num2=Math.cosh(randn1);
  num3=Math.floor(randn1);
  
  
  
  
  res.send(`The Random numbers are ${randn1}  <br> <br> log2 applied to ${randn1} is ${num1}  
  <br> <br> cosh applied to ${randn1} is ${num2}  <br> <br>  floor applied to ${randn1} is ${num3}`);


});

module.exports = router;