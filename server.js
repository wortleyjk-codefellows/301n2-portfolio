var express = require('express');
var path = ('path');
var app = express();

app.use(express.static(__dirname+'/static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});
app.get('/getBlogData', function (req, res){
  res.sendFile(__dirname+'/app/data/data.json');
});
app.get('/getAuthToken', function (req,res){
  res.sendFile(__dirname+'/app/data/authToken.json')
})

app.listen(3000, function () {
  console.log('listening to port: 3000');
  console.log(__dirname);
});


