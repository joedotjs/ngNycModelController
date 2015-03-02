var app = angular.module('ngNYC', []);

app.controller('MainCtrl', function ($scope) {
    $scope.turtles = [
        'Leonardo',
        'Raphael',
        'Michaelangelo',
        'Donatello'
    ];
});

app.directive('whitelist', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            ngModelCtrl.$validators.whitelist = function (value) {
                var theWhitelist = scope.$eval(attrs.whitelist);
                return theWhitelist.indexOf(value) !== -1;
            };

        }
    };
});