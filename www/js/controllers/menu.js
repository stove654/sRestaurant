'use strict';

/**
 * @ngdoc function
 * @name starter.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('MenuCtrl', function ($scope, localStorageService, $state, $stateParams, $q, $ionicLoading, $rootScope) {

    $scope.restaurant = localStorageService.get('sRestaurantDetail');

    $scope.categories = [
      {
        id: 1,
        name: 'Break fast'
      },
      {
        id: 2,
        name: 'Pizza'
      },
      {
        id: 3,
        name: 'Foods'
      },
      {
        id: 4,
        name: 'Beer'
      },
      {
        id: 5,
        name: 'Drink'
      }
    ];

    var foods = [
      {
        id: 1,
        idCategory: 1,
        name: 'Hamburger',
        price: 18.5,
        quantity: 1,
        description: 'sandwich consisting of one or more cooked patties of ground meat'
      },
      {
        id: 2,
        idCategory: 1,
        name: 'Chicken',
        price: 26,
        quantity: 1,
        description: 'Lotte ria is good!'
      },
      {
        id: 3,
        idCategory: 1,
        name: 'Pizza',
        price: 36,
        quantity: 1,
        description: 'Pizza 4P'
      },
      {
        id: 4,
        idCategory: 1,
        name: 'Chocolate Cake',
        price: 13.5,
        quantity: 1,
        description: 'Chocolate Cake consisting of one or more cooked patties of ground meat'
      }
    ];

    $scope.category = $scope.categories[0];
    $scope.foods = angular.copy(foods);

    $scope.selectedCategory = function (item) {
      $scope.category = item;
    };

    $scope.goOrderPayment = function () {
      $state.go('main.order', {id: $scope.restaurant.filterId});
      $scope.calculateOrder();
    }

  });
