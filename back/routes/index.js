var express = require('express');
var router = express.Router();
var gitHubApi = require('github');


router.get('/getFollowers', function(req, res, next) {

    var github = new gitHubApi({});

    github.users.getFollowingForUser({
        username: 'ajparedes10'
    }, function(err, data) {
        res.json(data);
    });
});

module.exports = router;
