(function() {
    'use strict';

    angular
        .module('activityManager')
        .service('$activity', $activity);

    function $activity($urls, $http) {
        var service = {
            getUserActivities: _getUserActivities,
            getActivityById: _getActivityById,
            addActivity: _addActivity
        };

        function _getUserActivities(userId) {
            return $http.get($urls.activity.getUserActivities(userId));
        }

        function _getActivityById(activityId) {
            return $http.get($urls.activity.getActivityById(activityId));
        }

        function _addActivity(activity) {
            return $http.post($urls.activity.addActivity(), activity);
        }
        return service;
    }
    $activity.$inject = ['$urls', '$http'];
})();