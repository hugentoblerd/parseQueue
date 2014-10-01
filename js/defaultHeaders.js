var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function () {
    return {
      request: function (config) {
        config.headers = {'X-Parse-Application-Id': 'x4uzlM6mXbPzOhRuwQXjkmks1gC3n4wEmUbXYNyT', 'X-Parse-REST-API-Key': 'LxoLVldmhrBUce3EsUG3mMABh7Sa30uEJActIISA'}
        return config;
      }
    };
  });