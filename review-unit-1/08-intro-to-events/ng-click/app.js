var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', function($scope) {
    $scope.number = 5;

    $scope.pickRandomNumber = function() {
        $scope.number = Math.floor(Math.random() * 10) + 1
    };

    $scope.reverseWord = function() {
        $scope.reversedWord = $scope.word.split('').reverse().join('');
    }
}]);