'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('OrderHistoryCtrl', function ($scope, localStorageService) {

    $scope.orderDetail = localStorageService.get('sRestaurantOrderDetail');

    console.log($scope.orderDetail);
  });
