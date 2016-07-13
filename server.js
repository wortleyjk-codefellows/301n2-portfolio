var express = require('express');
var path = ('path');
var app = express();

app.use(express.static(__dirname+'/static'));

var proxyGH = function(request, response) {
  (requestProxy({
    url: 'https://api.github.com/user/repos',
    headers: { Authorization: 'token ' + process.env.ghToken }
  }))(request, response);
};

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});
app.get('/getBlogData', function (req, res){
  res.sendFile(__dirname+'/app/data/data.json');
});

app.get('/github/data', proxyGH);
// app.get('/getAuthToken', function (req,res){
//   res.sendFile(__dirname+'/app/data/authToken.json')
// });





app.listen(process.env.PORT, function () {
  console.log('listening to port: 3000');
  console.log(__dirname);
});


