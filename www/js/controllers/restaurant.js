'use strict';

/**
 * @ngdoc function
 * @name starter.controller:RestaurantCtrl
 * @description
 * # RestaurantCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('RestaurantCtrl', function ($scope, localStorageService, $state, $compile, $stateParams, $timeout) {
    $scope.restaurant = localStorageService.get('sRestaurantDetail');

    angular.extend($scope.restaurant, {
      telephone: '+084 387 8384',
      email: 'stove654@gmail.com',
      website: 'http://stove.github.io'
    });

    $scope.bookmarkRestaurant = function (event) {
      event.stopPropagation();
      $scope.restaurant.hearth = !$scope.restaurant.hearth;
    };


    $scope.map = {center: {latitude: 51.507351, longitude: -0.127758 }, zoom: 15 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 51.507351,
        longitude: -0.127758
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };

    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });

    $scope.goToPage = function () {
      $state.go('main.menu');
    }

  });
