var express = require('express')
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser')
var sanitizeHtml = require('sanitize-html');
var compression = require('compression')
var helmet = require('helmet')
app.use(helmet());

var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*',function(request,response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/',indexRouter);
app.use('/topic', topicRouter);

app.use(function (req, res, next) {
  res.status(404).send("404 Notfound Sorry can't find that!")
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('err Something broke!')
})

app.listen(3000,function(){
  console.log('example app listening on port 3000!');
})