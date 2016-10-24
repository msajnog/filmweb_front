
'use strict';

angular.module('filmwebFrontApp')

.controller('InsideCtrl', function($scope, AuthService, API_ENDPOINT, $http, $location) {
  $scope.destroySession = function() {
    AuthService.logout();
  };

  $scope.getInfo = function() {
    $http.get(API_ENDPOINT.url + '/memberinfo').then(function(result) {
      $scope.memberinfo = result.data.msg;
    });
  };

  $scope.logout = function() {
    AuthService.logout();
    $location.path('/login');
  };
});
