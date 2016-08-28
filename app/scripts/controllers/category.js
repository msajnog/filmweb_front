'use strict';

/**
 * @ngdoc function
 * @name filmwebFrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the filmwebFrontApp
 */
angular.module('filmwebFrontApp')
  .controller('CategoryCtrl',['$scope', '$routeParams', 'categoriesService', 'categoryService', 'movieService', function ($scope, $routeParams, categoriesService, categoryService, movieService) {
    var categoryUrl = $routeParams.category,
        categoryId;

    if (categoryUrl === 'all') {
      movieService.get(function(response) {
        $scope.category.name = 'All';
        
        if (response.data) {
          $scope.categoryMovies = response.data;
        }
      });
    } else {
      categoriesService.get(function(response) {
        if (response.status) {
          $scope.categories = response.data;

          angular.forEach($scope.categories, function(category) {
            if (category.url === categoryUrl) {
              categoryId = category._id;
            }
          });

          if (categoryId) {
            categoryService.get({categoryId: categoryId}, function(response) {
              $scope.category = response.category;
              $scope.categoryMovies = response.movies;
            });
          }
        }
      });
    }
  }]);
