(function() {
    'use strict';

    angular
        .module('activityManager')
        .service('$session', $session);

    function $session($q, $localStorage, $state, $popup) {

        function _setUser(user) {
            $localStorage.setObject('user', user);
        }

        function _getUser() {
            return $localStorage.getObject('user');
        }

        function _isUserAuth() {
            return _getUser()._id !== undefined;
        }

        function _checkUserAuth() {
            if (!_isUserAuth()) {
                $state.go('login', {
                    reload: true
                });
            }
        }

        function _logoutUser() {
            $popup.show("Logout?", "Are you sure you want to logout?").then(function(userSelection) {
                if (userSelection) {
                    $localStorage.remove('user');
                    $state.go('login', {
                        reload: true
                    });
                }
            });
        }

        return {
            setUser: _setUser,
            getUser: _getUser,
            isUserAuth: _isUserAuth,
            checkUserAuth: _checkUserAuth,
            logoutUser: _logoutUser
        };
    }
    $session.$inject = ['$q', '$localStorage', '$state', '$popup'];
})();