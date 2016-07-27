(function() {
    'use strict';

    angular
        .module('activityManager.login')
        .controller('LoginCtrl', LoginCtrl);

    function LoginCtrl($scope, $state, $user, $session, $popup) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            checkUserAuth();
        });

        $scope.user = {
            'username': '', 
            'password': ''
        };
        $scope.login = login;

        function checkUserAuth() {
            if($session.isUserAuth()) {
                $state.go('tab.activities', {reload: true});
            }
        }

        function login(username, password) {
            $user.auth(username, password).then(function(res) {
                if (res.data._id) {
                    $session.setUser(res.data);
                    console.log("Auth ok. User: ", res.data);
                    $state.go('tab.activities', {reload: true});
                } else {
                    $popup.alert("Auth rejected", "Username or password wrong!").then(function(res) {
                        console.log("Auth rejected.");
                    });
                }
            })
        }
    }
    LoginCtrl.$inject = ['$scope', '$state', '$user', '$session', '$popup'];
})();