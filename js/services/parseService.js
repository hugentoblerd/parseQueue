var app = angular.module('parseQ');

app.service('parseService', function ($http, $q) {
  

  this.postData = function (obj) {
    return $http({
        method: 'POST',
        url: 'https://api.parse.com/1/classes/Questions',
        data: obj
    })
  };





});




