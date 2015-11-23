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
        id: 1,
        idCategory: 1,
        name: 'Hamburger',
        price: 18.5,
        quantity: 1,
        description: 'sandwich consisting of one or more cooked patties of ground meat'
      },
      {
        id: 1,
        idCategory: 1,
        name: 'Hamburger',
        price: 18.5,
        quantity: 1,
        description: 'sandwich consisting of one or more cooked patties of ground meat'
      },
      {
        id: 1,
        idCategory: 1,
        name: 'Hamburger',
        price: 18.5,
        quantity: 1,
        description: 'sandwich consisting of one or more cooked patties of ground meat'
      }
    ];

    $scope.category = $scope.categories[0];
    $scope.foods = angular.copy(foods);

    $scope.selectedCategory = function (item) {
      $scope.category = item;
    };

    $scope.goOrderPayment = function () {
      console.log('dsadsa');
      $state.go('main.order', {id: $scope.restaurant.filterId});
      $scope.calculateOrder();
    }

  });
