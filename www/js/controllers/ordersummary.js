'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderSummaryCtrl
 * @description
 * # OrderSummaryCtrl
 * Controller of the starter
 */
angular.module('starter')
    .controller('OrderSummaryCtrl', ['$scope', 'localStorageService', '$stateParams', 'order',
        function ($scope, localStorageService, $stateParams, order) {
            $scope.restaurant = localStorageService.get('restaurant');
            console.log(order);
            $scope.typeOrder = $stateParams.type;
            $scope.date = {
                now: new Date()
            };
        }]);
