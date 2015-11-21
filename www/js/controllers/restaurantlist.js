'use strict';

/**
 * @ngdoc function
 * @name starter.controller:RestaurantListCtrl
 * @description
 * # RestaurantListCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('RestaurantListCtrl', function ($scope) {

    $scope.title = 'Hello!';
    $scope.subtitle = "Today's QUiKie Picks";
    $scope.content = "We've picked 10 restaurants around you. Let see how hungry you are today!";

  });

