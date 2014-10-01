var app = angular.module('parseQ');

app.service('parseService', function ($http, $q) {
  

  this.postData = function (str) {
    var deferred = $q.defer();
    $http({
        method: 'POST',
        url: '',
        data: str
    }).then(function (res) {
      var response = res.data.results;
      deferred.resolve(response);
    })
    return deferred.promise;
  };





});




