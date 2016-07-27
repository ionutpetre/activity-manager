(function() {
    'use strict';

    angular
        .module('activityManager')
        .service('$popup', $popup);

    function $popup($ionicPopup) {
        var service = {
            show: _show,
            confirm: _confirm,
            alert: _alert
        };

        function _show(title, subTitle) {
            return $ionicPopup.show({
                title: title,
                subTitle: subTitle,
                buttons: [{
                    text: '<b>Yes</b>',
                    type: 'button-positive',
                    onTap: function(evt) {
                        return true;
                    }
                }, {
                    text: 'No',
                    type: 'button-default',
                    onTap: function(evt) {
                        return false;
                    }
                }]
            });
        }

        function _confirm(title, template) {
            return $ionicPopup.confirm({
                title: title,
                template: template
            });
        }

        function _alert(title, template) {
            return $ionicPopup.alert({
                title: title,
                template: template,
                okType: 'button-positive'
            });
        }
        return service;
    }
    $popup.$inject = ['$ionicPopup'];
})();