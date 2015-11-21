'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('OrderHistoryCtrl', ['$scope', '$http', '$stateParams', '$fetchData', '$auth', 'qConfig', '$ionicLoading', '$rootScope', '$socketIo', 'toastr', '$ionicScrollDelegate',
    function ($scope, $http, $stateParams, $fetchData, $auth, qConfig, $ionicLoading, $rootScope, $socketIo, toastr, $ionicScrollDelegate) {
      /*var id = $stateParams.id;
      $scope.orderDetail = [];
      var _filters = [
        {
          property: '_id',
          value: id,
          type: 'string',
          cmp: 'eq'
        }
      ];

      var loadOrderByUser = function () {
        $fetchData.getData('Order', null, null, _filters, null).then(function (resp) {
          console.log(resp.all());
          $scope.orderDetail = resp.all()[0];
        })
      };
      loadOrderByUser();*/

      var id = $stateParams.id;
      $scope.orderDetail = [];
      var _start = 0;
      var _limit = 1;

      var _filters = [
        {
          field: '_id',
          value: id,
          type: 'string',
          cmp: 'eq'
        }
      ];

      var _sorters = null;

      var query = {
        start: _start,
        limit: _limit,
        filter: _filters,
        sort: _sorters
      };

      var loadOrderByUser = function (query) {
        $http(
          {
            'method': 'POST',
            'data': query,
            'url': qConfig.apiHost + '/api/pos/getOrders'
          })
          .success(function (data) {
            $scope.orderDetail = data[0];
            console.log('orderDetail: ',$scope.orderDetail);
          })
          .error(function (err) {
            console.log(err);
          });
      };
      loadOrderByUser(query);
    }]);
