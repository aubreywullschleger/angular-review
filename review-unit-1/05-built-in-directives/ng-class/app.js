var app = angular.module('myApp', ['ngSanitize']);

app.controller('myController', ['$scope', function($scope){
    $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];

    $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

    $scope.nums = [1,1,2,5,6,9,9,9];

    $scope.obj = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    }
}]);

app.filter('myFilter', function($sce){
    return $sce.trustAsHtml;
});