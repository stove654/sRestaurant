'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('OrdersHistoryCtrl', function ($scope, $ionicLoading, $state, localStorageService) {

    $scope.ordersHistory = localStorageService.get('sRestaurantHistory');

    $scope.goDetailOrderHistory = function (id, item) {
      item.id = id;
      localStorageService.set('sRestaurantOrderDetail', item);
      $state.go('main.orderHistory', {id: id})
    };

    $scope.clear = function () {
      $scope.clearOrderHistory();
      $scope.ordersHistory = [];
    }

  });
