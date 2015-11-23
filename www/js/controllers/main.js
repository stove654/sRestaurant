'use strict';

/**
 * @ngdoc function
 * @name starter.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('MainCtrl', function ($scope, $state, $ionicPopover) {
    $scope.order = {};

    $scope.clearOrder = function () {
      $scope.order = {
        foods: [],
        tax: 10,
        totalQty: 0
      };
    };

    $scope.addNewItem = function (item) {

      event.preventDefault();
      event.stopPropagation();

      $scope.order.foods.push(angular.copy(item));

      var totalQty = 0;
      angular.forEach($scope.order.foods, function (value) {
        totalQty += value.quantity;
      });

      $scope.order.totalQty = totalQty;

    };


    $scope.calculateOrder = function () {
      var total = 0;
      angular.forEach($scope.order.foods, function (value) {
        if (value.isHalf) {
          value.subtotal = value.price/2 * value.quantity;
        } else {
          value.subtotal = value.price * value.quantity;
        }
        total += value.subtotal;
      });

      $scope.order.total = total;
    };

    $scope.removeFood = function (index) {
      $scope.order.foods.splice(index, 1);
      $scope.calculateOrder();
    };


    $scope.addQuantity = function (item) {
      item.quantity++;
    };

    $scope.subQuantity = function (item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    };

    $scope.ChooseTypeItem = function (item, type) {
      item.isHalf = type;
    };

    $scope.logOut = function () {
      $state.go('login');
    };

    var _init = function () {
      $scope.clearOrder();
    };

    _init();

  });
