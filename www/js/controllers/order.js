'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('OrderCtrl', function ($scope, localStorageService, $stateParams, $http, $ionicLoading, $ionicScrollDelegate, MathNumber) {
    $scope.restaurant = localStorageService.get('sRestaurantDetail');
    $scope.payments = [
      {
        name: 'order',
        id: 1
      },
      {
        name: 'payment',
        id: 2
      },
      {
        name: 'confirm',
        id: 3
      },
      {
        name: 'invoice',
        id: 4
      }
    ];
    $scope.successOrder = false;

    $scope.action = $scope.payments[0];
    $scope.actionOrder = function (index) {
      $ionicScrollDelegate.$getByHandle('orderScroll').scrollTop();
      if (!$scope.successOrder) {
        if (index < 3) {
          $scope.action = $scope.payments[index];
        }
      }

      if (index == 3 && !$scope.successOrder) {
        if (!localStorageService.get('sRestaurantHistory'))  {
          var ordersHistory = [];
        } else {
          ordersHistory = localStorageService.get('sRestaurantHistory')
        }
        var order = angular.copy($scope.order);
        order.paid_at = new Date();
        order.restaurant = $scope.restaurant;
        order.user = localStorageService.get('sRestaurantUser');
        ordersHistory.push(angular.copy(order));
        localStorageService.set('sRestaurantHistory', ordersHistory)
        $scope.action = $scope.payments[index];
        $scope.clearOrder();
      }
    };

    $scope.methodPay = 'Card';
    $scope.selectedPaymentMethod = function (index) {
      $scope.maymentMethod = index;
      if (!index) {
        $scope.methodPay = 'Card';
      } else {
        $scope.methodPay = 'Cash';
      }
    };


  });
