const pgb = require('pg-promise')();
var db = pgb('ec2-54-243-147-162.compute-1.amazonaws.com?ssl=true');

function getAllCustomers(req, res) {
    db.any('select * from customers')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL customer'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}