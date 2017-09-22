var express = require('express');
var router = express.Router();
var gitHubApi = require('github');


router.get('/getFollowers/:user', function(req, res, next) {

    var github = new gitHubApi({});

    github.users.getFollowersForUser({
        username: req.params.user
    }, function(err, data) {
        res.json(data);
    });
});

module.exports = router;
