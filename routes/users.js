var express = require('express');
var router = express.Router();

/*
 * GET users list
 */
router.get('/', function(req, res) {
    var users = req.db.get('users');
    users.find({}, function(error, docs) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'docs': docs
        });
    });
});

/*
 * GET user by id
 */
router.get('/:userId', function(req, res) {
    var users = req.db.get('users');
    users.find({
        _id: req.params.userId
    }, function(error, doc) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'doc': doc
        });
    });
});

module.exports = router;