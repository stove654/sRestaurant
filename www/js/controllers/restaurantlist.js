'use strict';

/**
 * @ngdoc function
 * @name starter.controller:RestaurantListCtrl
 * @description
 * # RestaurantListCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('RestaurantListCtrl', function ($scope, $timeout, localStorageService, $state, $translate) {

    $translate('HELLO')
      .then(function(translate) {
        $scope.title = translate;
      });
    $translate('SUBTITLE')
      .then(function(translate) {
        $scope.subtitle = translate;
      });
    $translate('CONTENT')
      .then(function(translate) {
        $scope.content = translate;
      });

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
        logo: './images/logo-1.jpg',
        open: 'Every day'
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
        logo: './images/logo-2.png',
        open: 'Every day'
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
        logo: './images/logo-3.jpg',
        open: 'Every day'
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
        logo: './images/logo-4.jpg',
        open: 'Every day'
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
        logo: './images/logo-1.jpg',
        open: 'Every day'
      }
    ];

    $scope.bookmarkRestaurant = function (item, event) {
      event.stopPropagation();
      item.hearth = !item.hearth;
    };

    $scope.doRefresh = function() {
      $timeout(function () {
        $scope.$broadcast('scroll.refreshComplete');
      }, 2000)
    };

    $scope.goDetailRestaurant = function (item) {
      localStorageService.set('sRestaurantDetail', item);
      $state.go('main.restaurant', {id: item.filterId});
    }
  });

