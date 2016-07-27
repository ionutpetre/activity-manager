(function() {
    'use strict';

    angular
        .module('activityManager.account')
        .controller('UserCtrl', UserCtrl);

    function UserCtrl($scope) {
        $scope.user = {
            settings: {
                showNotifications: true
            }
        };
    }
    UserCtrl.$inject = ['$scope'];
})();