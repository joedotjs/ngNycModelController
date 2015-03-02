var app = angular.module('ngNYC', []);

app.directive('colorPalette', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/color-palette.html',
        transclude: true,
        scope: {},
        controller: function ($scope) {

            $scope.colors = [];

            this.addColor = function (rgbArr) {
                $scope.colors.push(rgbArr);
            };

        }
    };
});


app.directive('rgbSlider', function () {
   return {
       restrict: 'E',
       templateUrl: 'views/rgb.html',
       scope: {},
       require: '^colorPalette',
       link: function (scope, element, attrs, paletteCtrl) {
           scope.color = [0, 0, 0];
           paletteCtrl.addColor(scope.color);
       }
   };
});