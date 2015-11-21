'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('OrdersHistoryCtrl', ['$scope', '$fetchData', '$stateParams', '$http', '$auth', 'qConfig', '$ionicLoading', '$rootScope', '$socketIo', 'toastr', '$ionicScrollDelegate', '$state',
    function ($scope, $fetchData, $stateParams, $http, $auth, qConfig, $ionicLoading, $rootScope, $socketIo, toastr, $ionicScrollDelegate, $state) {

      $scope.goDetailOrderHistory = function (id) {
        $state.go('main.orderHistory', {id: id})
      };

      var user = $auth.getCurrentUser();
      console.log(user);
      var _filters = [
        {
          property: 'createdByApp',
          value: user.id,
          type: 'string',
          cmp: 'eq'
        }
      ];
      var loadOrderByUser = function () {
        $fetchData.getData('Order', null, null, _filters, null).then(function (resp) {
          console.log(resp.all());
          $scope.orders = resp.all();
        })
      };

      loadOrderByUser();
    }]);
