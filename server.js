var express = require('express');
var app = express();
var db = require('./database')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.send('Express is running');
});



var output = {
    status: 'success',
    message: 'REST API is working'
}


app.get('/api/customers', function (req, res) {
    res.status(500).json(output);

});


app.get('/api/customers', db.getAllCustomers);



