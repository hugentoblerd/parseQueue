var app = angular.module('parseQ');

app.controller('mainCtrl', function ($scope) {

// empty question variable
  $scope.question = '';
  
  // postData through the parseService to parse.com
  var postData = function () {
    parseService.postData($scope.question);
    // resets question variable so user can add a new question
    $scope.question = '';
  };






});





