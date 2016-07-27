(function() {
    'use strict';

    angular
        .module('activityManager.activities')
        .controller('ActivitiesCtrl', ActivitiesCtrl);

    function ActivitiesCtrl($scope, $state, $session, $activity) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            $session.checkUserAuth();
            $scope.user = $session.getUser();
            getUserActivities($scope.user._id);
        });

        $scope.searchedText = '';
        $scope.user = {};
        $scope.activities = [];
        $scope.getUserActivities = getUserActivities;
        $scope.logout = $session.logoutUser;

        function getUserActivities(userId) {
            $activity.getUserActivities(userId).then(function(res) {
                $scope.activities = res.data;
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
    }
    ActivitiesCtrl.$inject = ['$scope', '$state', '$session', '$activity'];
})();