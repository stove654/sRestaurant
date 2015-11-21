'use strict';

/**
 * @ngdoc function
 * @name starter.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the starter
 */
angular.module('starter')
    .controller('CategoryCtrl', ['$scope', 'localStorageService', '$state', '$stateParams', function ($scope, localStorageService, $state, $stateParams) {
        $scope.categories = [
            {
                id: 1,
                icon: './images/b1.jpg',
                name: 'Burgers',
                new: false
            },
            {
                id: 2,
                icon: './images/2.jpg',
                name: 'Sandwiches',
                new: false
            },
            {
                id: 3,
                icon: './images/3.jpg',
                name: 'Drinks'
            },
            {
                id: 4,
                icon: './images/4.jpg',
                name: 'Italian',
                new: true
            },
            {
                id: 5,
                icon: './images/burger_icon_1.png',
                name: 'Fast Food',
                new: false
            }
        ];

        $scope.restaurant = localStorageService.get('restaurant');
        $scope.typeOrder = $stateParams.type;
        $scope.selectedCategory = function (item) {
            localStorageService.set('category', item);
            $state.go('main.menu', {type: $scope.typeOrder});
        };

    }]);
