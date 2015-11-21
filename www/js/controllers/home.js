'use strict';

/**
 * @ngdoc function
 * @name starter.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the starter
 */
angular.module('starter')
    .controller('HomeCtrl', function ($scope, $state, localStorageService, $auth, $logger) {

        $logger.moduleName = 'Home Controller';

        $scope.slideList = [
            {
                image: './images/res-4.jpg'
            },
            {
                image: './images/res-3.jpg'
            },
            {
                image: './images/banner-restaurent.jpg'
            },
            {
                image: './images/res-5.jpeg'
            },
            {
                image: './images/res-1.jpg'
            }
        ];

        $scope.restaurants = [
            {
                filterId: 1,
                name: 'Olives',
                location: 'Level 3, SM Mega Fashion Hall',
                image: './images/res-1.jpg',
                rate: '4.5',
                review: 17,
                vote: 10,
                map: './images/map-1.jpg',
                logo: './images/logo-1.jpg'
            },
            {
                filterId: 2,
                name: 'El Celler de Can Roca',
                location: '47 London streets',
                image: './images/res-2.jpg',
                rate: '4.5',
                review: 127,
                vote: 98,
                map: './images/map-2.jpg',
                logo: './images/logo-2.png'
            },
            {
                filterId: 3,
                name: 'the Moose & Roo Pub & Grill',
                location: '42b Ma May, Hanoi, Vietnam',
                image: './images/res-3.jpg',
                rate: '4.7',
                review: 65,
                vote: 56,
                map: './images/map-3.jpg',
                logo: './images/logo-3.jpg'
            },
            {
                filterId: 4,
                name: 'The republic',
                location: '39 Jerome Ave, Bloomfield, CT 06002',
                image: './images/res-4.jpg',
                rate: '4.0',
                review: 67,
                vote: 45,
                map: './images/map-4.jpeg',
                logo: './images/logo-4.jpg'
            },
            {
                filterId: 5,
                name: 'Linguini Fini SM Mega Fashion Hall',
                location: 'Level 3, SM Mega Fashion Hall, Edsa cor',
                image: './images/res-5.jpeg',
                rate: '4.5',
                review: 17,
                vote: 10,
                map: './images/map-5.jpg',
                logo: './images/logo-1.jpg'
            }
        ];

        $scope.goToRestaurantList = function () {
            $state.go('main.restaurantList')
        };
        $scope.selected = 0;

        $scope.select = function (event) {
            if (angular.element(event.target).hasClass('sel')) {
                angular.element(event.target).removeClass('sel');
            } else {
                angular.element(event.target).addClass('sel');
            }
        };
        $scope.goDetailRestaurant = function (item) {
            localStorageService.set('restaurant', item);
            $state.go('main.restaurant');
        };


        var currentUser = $auth.getCurrentUser();
        if ( currentUser && currentUser.nextState) {
          $auth.connectSocketIo(function(result){
            $logger.info('$auth.connectSocketIo', 'result', result);

            if (result) {

            } else {

            }
          });
        }

    });
