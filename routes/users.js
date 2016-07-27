var express = require('express');
var router = express.Router();

/*
 * AUTH user
 */
router.post('/auth', function(req, res) {
    var users = req.db.get('users');
    users.find({
        username: req.body.username,
        password: req.body.password
    }, function(error, docs) {
        if (error != null || docs.length === 0) {
            res.json({});
        } else {
            res.json(docs[0]);
        }
    });
});

/*
 * GET users list
 */
router.get('/', function(req, res) {
    var users = req.db.get('users');
    users.find({}, function(error, docs) {
        if (error != null || docs.length === 0) {
            res.json({});
        } else {
            res.json(docs);
        }
    });
});

/*
 * GET user by id
 */
router.get('/:userId', function(req, res) {
    var users = req.db.get('users');
    users.find({
        _id: req.params.userId
    }, function(error, docs) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'doc': docs[0]
        });
    });
});

/*
 * GET activities by user id
 */
router.get('/:userId/activities/', function(req, res) {
    var activities = req.db.get('activities');
    activities.find({
        $query: {
            "participants._id": req.params.userId
        },
        $orderby: {
            createdTime: -1
        }
    }, function(error, docs) {
        if (error != null || docs.length === 0) {
            res.json([]);
        } else {
            res.json(docs);
        }
    });
});

module.exports = router;