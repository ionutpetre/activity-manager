(function() {
    'use strict';

    angular
        .module('activityManager')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: './views/login/index.html',
            controller: 'LoginCtrl'
        })

        .state('tab', {
            abstract: true,
            templateUrl: './views/tabs/index.html'
        })

        .state('tab.activities', {
            url: '/activities',
            views: {
                'tab-activities': {
                    templateUrl: './views/activities/index.html',
                    controller: 'ActivitiesCtrl'
                }
            }
        })

        .state('tab.user', {
            url: '/user',
            views: {
                'tab-user': {
                    templateUrl: './views/user/index.html',
                    controller: 'UserCtrl'
                }
            }
        })

        .state('showActivity', {
            url: '/activities/:activityId',
            templateUrl: './views/activity/show.html',
            controller: 'ShowActivityCtrl'
        })

        .state('addActivity', {
            url: '/activities/add',
            templateUrl: './views/activity/add.html',
            controller: 'AddActivityCtrl'
        });

        $urlRouterProvider.otherwise('/login');
    }
})();