var app = angular.module('parseQ');

app.controller('mainCtrl', function ($scope, parseService) {

// empty question object(needs to be an object then I need to create a 'text' key when I bind it in the index.html)
  $scope.message = {};

  // empty object to add messages from parse.com to
  $scope.messages = {};

  // postData through the parseService to parse.com
  $scope.postData = function () {
    if ($scope.message) {
      parseService.postData($scope.message);
      // resets question variable so user can add a new question
      $scope.message = {};
    }else {
      alert('What question would you like to ask?')
    };
    $scope.getData();
  };

  // getData through the parseService to parse.com
  $scope.getData = function () {
    parseService.getData()
      .then(function (res) {
        console.log(res);
        $scope.messages = res.data.results;
        console.log($scope.messages);
      })
  };






});





