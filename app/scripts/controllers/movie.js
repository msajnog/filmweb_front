'use strict';

/**
 * @ngdoc function
 * @name filmwebFrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the filmwebFrontApp
 */
angular.module('filmwebFrontApp')
  .controller('MovieCtrl',['$scope', 'categoriesService', 'movieService', function ($scope, categoriesService, movieService) {

    $scope.categories = [];

    $scope.movie = {
        title: '',
        description: '',
        director: '',
        categories: []
    };

    categoriesService.get(function(response) {
      if (response.status) {
        $scope.categories = response.data;
      }
    });

    $scope.addMovie = function() {
      console.log($scope.movie);
      movieService.save($scope.movie, function(res) {
        console.log(res);
      });
    };
  }]);
