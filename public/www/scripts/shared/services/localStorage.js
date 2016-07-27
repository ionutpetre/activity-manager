(function() {
    'use strict';

    angular
        .module('activityManager')
        .service('$localStorage', $localStorage);

    function $localStorage($window) {
        var service = {
            set: _set,
            get: _get,
            setObject: _setObject,
            getObject: _getObject,
            remove: _remove
        };

        function _set(key, value) {
            $window.localStorage[key] = value;
        }

        function _get(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        }

        function _setObject(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        }

        function _getObject(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }

        function _remove(key) {
            $window.localStorage.removeItem(key);
        }
        return service;
    }
    $localStorage.$inject = ['$window'];
})();