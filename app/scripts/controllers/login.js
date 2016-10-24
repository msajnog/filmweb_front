'use strict';

angular.module('filmwebFrontApp')
.controller('LoginCtrl', function($scope, AuthService, $location) {
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function() {
      $location.path('/');
    }, function(errMsg) {
      alert('Login failed!\n' + errMsg);
    });
  };
});
