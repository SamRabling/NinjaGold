const mongoose = require('mongoose'), 
      Gold = mongoose.model('Gold');

const gold = require('../controllers/ninjagolds.js')

module.exports = function(app){

    //  root
    app.get('/gold', function(req, res){
        golds.index(req, res);
    });

     // update
     app.put('/gold/:id', function(req, res){
        golds.update(req, res);
    });

}        