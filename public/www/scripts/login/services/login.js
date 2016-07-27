(function() {
    'use strict';

    angular
        .module('activityManager.login')
        .service('$login', $login);

    function $login($http) {
        var service = {
            auth: _auth
        }
        function _auth(username, password) {
            return $http.post('/rest/users/auth', {
                "username": username,
                "password": password
            });
        }
        return service;
    }
    $login.$inject = ['$http'];
})();