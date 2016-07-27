(function() {
    'use strict';

    angular
        .module('activityManager')
        .service('$urls', $urls);

    function $urls(config) {

        function _auth() {
            return '/rest/users/auth';
        }

        function _getAllUsers() {
            return '/rest/users';
        }

        function _getUserActivities(userId) {
            return '/rest/users/' + userId + '/activities';
        }

        function _getActivityById(activityId) {
            return '/rest/activities/' + activityId;
        }

        function _addActivity() {
            return '/rest/activities';
        }

        return {
            user: {
                auth: _auth,
                getAllUsers: _getAllUsers,
            },
            activity: {
                getUserActivities: _getUserActivities,
                getActivityById: _getActivityById,
                addActivity: _addActivity
            }
        }
    }
    $urls.$inject = ['config'];
})();