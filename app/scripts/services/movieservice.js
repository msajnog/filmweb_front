'use strict';

/**
 * @ngdoc service
 * @name filmwebFrontApp.categoryService
 * @description
 * # categoryService
 * Service in the filmwebFrontApp.
 */
angular.module('filmwebFrontApp')
  .factory('movieService', ['$resource', function ($resource) {
    return  $resource('http://localhost:8080/api/movies/', {}, {
      'get': {
        method: 'GET',
      },
      'save': {
        method: 'POST',
      }
    });
  }]);
