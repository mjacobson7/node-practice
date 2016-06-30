var express    = require('express');
var bodyParser = require('body-parser');
var cors       = require('cors');
var morgan     = require('morgan');

var app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());






// ROUTES //
app.get('/api/v1/test', function(req, res) {
  res.status(200).send('WE GOOD TO GO!');
});


// PORT //
var port = 4400;

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
