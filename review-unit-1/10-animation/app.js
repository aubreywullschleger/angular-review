var app = angular.module('animationApp', ['ngAnimate']);

app.controller('MainController', ['$scope', function($scope) {
  $scope.instructors = ['Tim', 'Ian', 'Matt', 'Elie'];
}]);
