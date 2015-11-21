'use strict';

/**
 * @ngdoc function
 * @name starter.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('MenuCtrl', ['$scope', 'localStorageService', '$state', 'appConstant', '$stateParams', '$fetchData', '$q', '$ionicLoading', '$rootScope', 'toastr',
    function ($scope, localStorageService, $state, appConstant, $stateParams, $fetchData, $q, $ionicLoading, $rootScope, toastr) {

      $scope.restaurant = localStorageService.get('restaurant');
      $scope.category = {};
      $scope.typeOrder = $stateParams.type;
      $scope.idRestaurant = $stateParams.idRestaurant;

      console.log('$scope.typeOrder :', $scope.typeOrder);
      console.log('$stateParams.idRestaurant :', $stateParams.idRestaurant);

      var foods = [];
      var _filter = [
        {
          property: 'site',
          value: $scope.idRestaurant,
          type: 'string',
          cmp: 'eq'
        }
      ];
      console.log('_filter: ', _filter);
      $scope.goOrderPayment = function () {
        console.log($scope.order);
        if ($scope.order.foods.length) {
          $rootScope.goToPage('main.order', {type: $scope.typeOrder, idRestaurant: $scope.idRestaurant})
        } else {
          toastr.warning("Card is null, please add item to Card !", "Error")
        }
      };

      var _init = function () {
        $ionicLoading.show({
          template: 'Loading...'
        });
        $q.all([
          $fetchData.getData('Category', null, null, _filter, null),
          $fetchData.getData('MenuItem', null, null, _filter, null)
        ]).then(function (data) {
          console.log(data[0].all());
          $scope.categories = data[0].all();
          foods = _.groupBy(data[1].all(), function (num) {
            num.quantity = 1;
            return num.category._id
          });
          $scope.category = $scope.categories[0];
          $scope.foods = angular.copy(foods[$scope.category._id]);
          $ionicLoading.hide();
        }, function () {
          $ionicLoading.hide();
        })
      };

      $scope.selectedCategory = function (data) {
        $scope.category = data;
        $scope.foods = angular.copy(foods[data._id]);
        console.log($scope.foods);
      };
      _init();
    }]);
