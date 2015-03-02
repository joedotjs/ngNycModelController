var app = angular.module('ngNYC', []);

app.controller('MainCtrl', function ($scope, $interval) {

    $scope.review = {
        text: 'Wow, that talk Joe Alves gave was, like, INCREDIBLE!!!!'
    };

    //$interval(function () {
    //    $scope.review.rating = Math.floor(Math.random() * 5) + 1;
    //}, 1000);

});

app.directive('onlyGoodRatings', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            ngModelCtrl.$validators.onlyGoodRatings = function (value) {
                return value > 3;
            };
        }
    };
});

app.directive('starRating', function () {

    var calculateRating = function (clickPos, width) {
        var one = width / 5;
        return Math.ceil(clickPos / one);
    };

    return {
        restrict: 'E',
        templateUrl: 'views/star.html',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {

            scope.setRating = function (e) {
                var rating = calculateRating(e.offsetX, element[0].clientWidth);
                scope.rating = rating;
                ngModelCtrl.$setViewValue(rating);
            };

            ngModelCtrl.$render = function () {
                scope.rating = ngModelCtrl.$viewValue;
            };

        }
    };

});



















app.directive('madJoe', function () {
   return {
       restrict: 'E',
       template: '<img class="pic" src="images/invalid.jpg" />',
       replace: true
   };
});

app.directive('weCool', function () {
   return {
       restrict: 'E',
       template: '<img class="pic" src="images/valid.jpg" />',
       replace: true
   };
});