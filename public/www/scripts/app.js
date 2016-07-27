(function() {
    'use strict';

    angular.module('activityManager', [
        'ionic',
        'activityManager.login',
        'activityManager.dash',
        'activityManager.activities',
        'activityManager.activity',
        'activityManager.account'
    ]);

    angular.module('activityManager.login', []);
    angular.module('activityManager.dash', []);
    angular.module('activityManager.activities', []);
    angular.module('activityManager.activity', []);
    angular.module('activityManager.account', []);
})();