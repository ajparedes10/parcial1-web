var express = require('express');
var router = express.Router();
var gitHubApi = require('github');
var mongodb = require('mongodb');

var url = 'mongodb://admin:admin@ds147034.mlab.com:47034/github-followers';

function guardarHistorial(aGuardar) {
    mongodb.connect(url, (err,db)=>{
        if(err) throw err;

        var buscado = db.collection("buscado");

        buscado.insertOne(aGuardar, function (err2,res) {
            if(err2) throw err2;
        });
    });
}
function darHistorial(callback) {
    mongodb.connect(url, (err,db)=>{
        if(err) throw err;

        var historial = db.collection("buscado");
        historial.find({}).toArray((err2,historial)=> {
            if(err2) throw err2;

            callback(historial);
        });
    });
}
router.get("/getFollowers", function (req,res) {
    darHistorial((followers)=> {
        res.json(followers);
    })
});

router.get('/getFollowers/:user', function(req, res, next) {

    var github = new gitHubApi({});

    github.users.getFollowersForUser({
        username: req.params.user
    }, function(err, data) {
        guardarHistorial({login: req.params.user});
        res.json(data);
    });
});

module.exports = router;
