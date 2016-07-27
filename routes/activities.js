var express = require('express');
var router = express.Router();

/*
 * POST a new activity
 */
router.post('/', function(req, res) {
    var activity = req.body,
        activities = req.db.get('activities');
    activities.insert(activity, function(error, doc) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'doc': doc
        });
    });
});

/*
 * GET activity list
 */
router.get('/', function(req, res) {
    var activities = req.db.get('activities');
    activities.find({}, function(error, docs) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'docs': docs
        });
    });
});

/*
 * GET activity by id
 */
router.get('/:activityId', function(req, res) {
    var activities = req.db.get('activities');
    activities.find({
        _id: req.params.activityId
    }, function(error, docs) {
        if (error != null || docs.length === 0) {
            res.json({});
        } else {
            res.json(docs[0]);
        }
    });
});

/*
 * PUT activity by id
 */
router.put('/:activityId', function(req, res) {
    var activity = req.body,
        activities = req.db.get('activities');
    activities.update({
        _id: req.params.activityId
    }, activity, {
        upsert: false
    }, function(error, doc) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'doc': doc
        });
    });
});

/*
 * DELETE activity by id
 */
router.delete('/:activityId', function(req, res) {
    var activities = req.db.get('activities');
    activities.remove({
        _id: req.params.activityId
    }, function(error, doc) {
        res.json(error ? {
            'error': error.toString()
        } : {
            'doc': doc
        });
    });
});

module.exports = router;