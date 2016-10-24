'use strict';

angular.module('filmwebFrontApp')
.controller('RegisterCtrl', function($scope, AuthService, $location) {
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.signup = function() {
    AuthService.register($scope.user).then(function(msg) {
      $location.path('/login');
      alert('Register success!\n' + msg);
    }, function(errMsg) {
      alert('Register failed!\n' + errMsg);
    });
  };
})
