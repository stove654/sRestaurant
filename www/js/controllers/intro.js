'use strict';

/**
 * @ngdoc function
 * @name starter.controller:IntroCtrl
 * @description
 * # IntroCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('IntroCtrl', function ($scope, $state) {

    $scope.goLogin = function () {
      $state.go('login');
    }

  });
