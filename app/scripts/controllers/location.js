'use strict';

/**
 * @ngdoc function
 * @name filmwebFrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the filmwebFrontApp
 */
angular.module('filmwebFrontApp')
  .controller('LocationCtrl',['$scope', '$location', 'categoriesService', function ($scope, $location, categoriesService) {
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };

    categoriesService.get(function(response) {
      if (response.status) {
        $scope.categories = response.data;
      }
  	});
  }]);
