'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('OrderCtrl', ['$scope', 'localStorageService', '$stateParams', '$http', '$auth', 'qConfig', '$ionicLoading', '$rootScope', '$socketIo', 'toastr', '$ionicScrollDelegate', 'MathNumber',
    function ($scope, localStorageService, $stateParams, $http, $auth, qConfig, $ionicLoading, $rootScope, $socketIo, toastr, $ionicScrollDelegate, MathNumber) {
      $scope.restaurant = localStorageService.get('restaurant');
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
      $scope.idRes = $stateParams.idRestaurant;
      $scope.typeOrder = $stateParams.type;
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
          $ionicLoading.show({
            template: 'Creating order...'
          });

          if ($scope.order.foods.length) {
            var user = $auth.getCurrentUser();

            var saveOrder = {
                subTotal: $scope.order.calculation.subTotal,
                total: $scope.order.calculation.total,
                quantity: $scope.order.calculation.totalQty,
                taxTotal: $scope.order.calculation.taxTotal,
                typeTotal: $scope.order.calculation.typeTotal,
                cash: $scope.order.calculation.total,
                returnCash: 0,
                details: [],
                done: $scope.order.done,
                siteId: $scope.idRes,
                createdByApp: user.id,
                closedByApp: user.id,
                fromWhere: 2 //Order from Frontend Mobile App
              }
              ;

            _.each($scope.order.foods, function (orderItem) {
              saveOrder.details.push(
                {
                  id: orderItem.id,
                  name: orderItem.name,
                  price: orderItem.price,
                  amount: orderItem.amount,
                  total: orderItem.total,
                  size: (orderItem.isHalf) ? 2 : 1,
                  quantity: orderItem.quantity,
                  taxTotal: orderItem.taxTotal,
                  typeTotal: orderItem.typeTotal,
                  status: orderItem.status
                }
              )
            });

            console.log(saveOrder);

            $http({
              'method': 'POST',
              'data': saveOrder,
              'url': qConfig.apiHost + '/api/pos/saveOrder'
            }).then(function successCallback(response) {
              $scope.orderRequest = response;

              console.log('successCallback: ', $scope.orderRequest);

              $scope.successOrder = true;

              /*
              console.log($scope.orderRequest);
              $scope.orderCbAnoumt = response.data.order.totalAmount / 1.1;
              $scope.orderCbAnoumt = MathNumber.mathNumber($scope.orderCbAnoumt, 2);
              */

              $scope.action = $scope.payments[3];
              $scope.clearOrder();
              $ionicLoading.hide();
            }, function errorCallback(response) {
              console.log('errorCallback: ', response);

              // called asynchronously if an error occurs
              // or server returns response with an error status.
              $ionicLoading.hide();
            });
          } else {
            toastr.warning("Card is null, please add item to Card !", "Error")
          }
        }
      };

      $scope.methodPay = 'Card';
      $scope.selectedPaymentMethod = function (index) {
        $scope.maymentMethod = index;
        if (index == 0) {
          $scope.methodPay = 'Card';
        } else {
          $scope.methodPay = 'Cash';
        }
      };

      $scope.help = function () {
        var data = {
          siteId: $scope.idRes,
          user: $auth.getCurrentUser()
        };
        $socketIo.emit('help_me', data);
        toastr.info("Done", "send request to Restaurant !");
      };
    }])
;
