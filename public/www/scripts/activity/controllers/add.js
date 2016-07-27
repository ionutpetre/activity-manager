(function() {
    'use strict';

    angular
        .module('activityManager.activity')
        .controller('AddActivityCtrl', AddActivityCtrl);

    function AddActivityCtrl($scope, $state, $session, $popup, $activity, $user) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
            $session.checkUserAuth();
            $scope.user = $session.getUser();
            initActivity();
            getParticipants();
        });

        $scope.user = {};
        $scope.activity = {};
        $scope.participants = [];
        $scope.logout = $session.logoutUser;
        $scope.addActivity = addActivity;

        function initActivity() {
            $scope.activity = {
                title: '',
                description: '',
                amount: 0,
                participants: [],
                comments: [],
                createdTime: 0,
                finished: false
            };
        }

        function getParticipants() {
            $user.getAllUsers().then(function(res) {
                $scope.participants = res.data;
                angular.forEach($scope.participants, function(participant, index) {
                    participant.selected = true;
                });
            });
        }

        function setSelectedParticipants() {
            angular.forEach($scope.participants, function(participant, index) {
                if(participant.selected) {
                    participant.paid = false;
                    $scope.activity.participants.push(participant);
                }
            });
        }

        function isSelectedParticipants() {
            var selected = false;
            angular.forEach($scope.participants, function(participant, index) {
                if(participant.selected) {
                    selected = true;
                }
            });
            return selected;
        }

        function addActivity() {
            if(!isSelectedParticipants()) {
                $popup.alert("Error!", "No selected participants!").then(function() {});
            } else {
                $popup.show("Are you sure?", 
                    "This will be added in the activity collection!").then(function(userSelection) {
                        if(userSelection) {
                            $scope.activity.createdTime = new Date().getTime();
                            $scope.activity.owner = $scope.user;
                            setSelectedParticipants();
                            $activity.addActivity($scope.activity).then(function(res) {
                                $state.go('tab.activities', {reload: true});
                            });
                        }
                });
            }
        }
    }
    AddActivityCtrl.$inject = ['$scope','$state', '$session', '$popup', '$activity', '$user'];
})();