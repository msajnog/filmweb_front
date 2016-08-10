'use strict';

/**
 * @ngdoc function
 * @name filmwebFrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the filmwebFrontApp
 */
angular.module('filmwebFrontApp')
  .controller('CategoryCtrl',['$scope', '$routeParams', 'categoriesService', 'categoryService', function ($scope, $routeParams, categoriesService, categoryService) {
    var categoryName = $routeParams.category,
        categoryId;

    categoriesService.get(function(response) {
      if (response.status) {
        $scope.categories = response.data;

        angular.forEach($scope.categories, function(category) {
          if (category.name === categoryName) {
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
  }]);
