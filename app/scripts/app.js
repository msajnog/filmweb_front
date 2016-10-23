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
    'ngTouch',
    'checklist-model'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        requiresAuth: false
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        requiresAuth: false
      })
      // .when('/categories', {
      //   templateUrl: 'views/category.html',
      //   controller: 'CategoryCtrl',
      //   controllerAs: 'category'
      // })
      .when('/category/:category', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        requiresAuth: false
      })
      .when('/add-movie', {
        templateUrl: 'views/addMovie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie',
        requiresAuth: true
      })
      .when('/outside', {
        abstract: true,
        templateUrl: 'views/outside.html',
        requiresAuth: false
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'LoginCtrl',
        requiresAuth: false
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        requiresAuth: false
      })
      .when('/inside', {
        templateUrl: 'views/inside.html',
        controller: 'InsideCtrl',
        requiresAuth: true
      })
      .otherwise({
        redirectTo: '/login'
      });
  }])
  .run(function ($rootScope, $route, AuthService, AUTH_EVENTS, $location) {
    $rootScope.$on('$routeChangeStart', function (event,next) {
      $rootScope.authorized = AuthService.isAuthenticated();
      if (!AuthService.isAuthenticated()) {
        if (next.$$route.requiresAuth) {
          event.preventDefault();
          $location.path('/login');
        }
      }
    });
  });
