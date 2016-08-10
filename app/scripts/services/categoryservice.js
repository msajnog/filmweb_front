'use strict';

/**
 * @ngdoc service
 * @name filmwebFrontApp.categoryService
 * @description
 * # categoryService
 * Service in the filmwebFrontApp.
 */
angular.module('filmwebFrontApp')
  .factory('categoriesService', ['$resource', function ($resource) {
    return  $resource('http://localhost:8080/api/categories/', {}, {
      'get': {
        method: 'GET',
      },
      'save': {
        method: 'POST',
      }
    });
  }]);

  angular.module('filmwebFrontApp')
    .factory('categoryService', ['$resource', function ($resource) {
      return  $resource('http://localhost:8080/api/category/:categoryId', {}, {
        'get': {
          method: 'GET'
        }
      });
    }]);
