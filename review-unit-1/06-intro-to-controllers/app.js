var app = angular.module('firstApp', []);

app.controller('MyFirstController', function($scope) {
    $scope.name = "Severus Snape";
});

app.controller('ExercisesController', ['$scope', function($scope) {
    $scope.faveColor = 'turquoise';
    $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
    $scope.rightNow = new Date();
}]);