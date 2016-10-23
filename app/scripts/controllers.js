
'use strict';

angular.module('filmwebFrontApp')

.controller('LoginCtrl', function($scope, AuthService, $location) {
  $scope.user = {
    name: '',
    password: ''
  };

  $scope.login = function() {
    AuthService.login($scope.user).then(function() {
      $location.path('/inside');
    }, function(errMsg) {
      alert('Login failed!\n' + errMsg);
    });
  };
})

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
})

.controller('AppCtrl', function($scope, AuthService, AUTH_EVENTS, $location) {
  $scope.$on(AUTH_EVENTS.notAuthenticated, function() {
    AuthService.logout();
    $location.path('/login');
    alert('Session Lost!');
  });
});
