var app = angular.module('myApp',[]);

app.controller("MainController", ['$scope', function($scope)
  {
    $scope.submitForm = function(isValid) {
      if(isValid) {
        alert("this form is amazing")
      }
    }
  }]);
