(function() {
    'use strict';

    angular
        .module('activityManager')
        .service('$user', $user);

    function $user($urls, $http) {
        var service = {
            auth: _auth,
            getAllUsers: _getAllUsers
        };

        function _auth(username, password) {
            return $http.post($urls.user.auth(), {
                "username": username,
                "password": password
            });
        }
        function _getAllUsers() {
            return $http.get($urls.user.getAllUsers());
        }
        return service;
    }
    $user.$inject = ['$urls', '$http'];
})();