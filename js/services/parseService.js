var app = angular.module('parseQ');

app.service('parseService', function ($http, $q) {
  
// POST request that returns a promise
  this.postData = function (obj) {
    return $http({
        method: 'POST',
        url: 'https://api.parse.com/1/classes/Questions',
        data: obj
    })
    getData();
  };

// GET request that returns a promise
  this.getData = function () {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/Questions'
    })
  };





});




