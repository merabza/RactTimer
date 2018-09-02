var express = require('express');
const path = require('path')

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

console.log('PORT is ' + PORT );

app.use(function(req, res, next) {
  // console.log('req.headers start ------');
  // console.log(req.headers);
  // console.log('req.headers finish ------');
  // console.log('req.headers[x-forwarded-proto] === ' + req.headers['x-forwarded-proto'] );
  if ( req.headers['x-forwarded-proto'] === 'https' ) {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
    // console.log('redirect to ' + 'http://' + req.hostname + ':' + PORT + req.url );
  }
});

app.use(express.static('public'));



// console.log('__dirname is ' + __dirname );

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, function() {
  console.log('Express server is up on port ' +  PORT);
});