(function() {
    'use strict';

    angular
        .module('activityManager.activity')
        .controller('ShowActivityCtrl', ShowActivityCtrl);

    function ShowActivityCtrl($scope, $stateParams, $session, $activity) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
            $session.checkUserAuth();
            $scope.user = $session.getUser();
            getActivity($stateParams.activityId);
        });

        $scope.user = {};
        $scope.activity = {};
        $scope.logout = $session.logoutUser;

        function getActivity(activityId) {
            $activity.getActivityById(activityId).then(function(res) {
                $scope.activity = res.data;
            });
        }
    }
    ShowActivityCtrl.$inject = ['$scope', '$stateParams', '$session', '$activity'];
})();