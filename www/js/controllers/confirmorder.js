'use strict';

/**
 * @ngdoc function
 * @name starter.controller:OrderConfirmCtrl
 * @description
 * # OrderConfirmCtrl
 * Controller of the starter
 */
angular.module('starter')
    .controller('OrderConfirmCtrl', ['$scope', 'localStorageService', '$stateParams', function ($scope, localStorageService, $stateParams) {
        $scope.restaurant = localStorageService.get('restaurant');

        $scope.typeOrder = $stateParams.type;
    }]);
