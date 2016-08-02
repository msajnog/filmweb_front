'use strict';

/**
 * @ngdoc overview
 * @name filmwebFrontApp
 * @description
 * # filmwebFrontApp
 *
 * Main module of the application.
 */
angular
  .module('filmwebFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      // .when('/categories', {
      //   templateUrl: 'views/category.html',
      //   controller: 'CategoryCtrl',
      //   controllerAs: 'category'
      // })
      .when('/category/:category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LocationCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  }]);
