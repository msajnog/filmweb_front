'use strict';

/**
 * @ngdoc function
 * @name filmwebFrontApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the filmwebFrontApp
 */
angular.module('filmwebFrontApp')
  .controller('CategoryCtrl',['$scope', 'categoriesService', function ($scope, categoriesService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    categoriesService.get(function(response) {
      if (response.status) {
        $scope.categories = response.data;
      }
  	});
  }]);
