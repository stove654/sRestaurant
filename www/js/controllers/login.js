'use strict';

/**
 * @ngdoc function
 * @name starter.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('LoginCtrl', function ($scope) {

    $scope.goSignin = function () {
      $scope.signin = true;
      $scope.signup = false;
    };

    $scope.goSignup = function () {
      $scope.signup = true;
      $scope.signin = false;
    };

    $scope.goBackLogin = function () {
      $scope.signin = false;
      $scope.signup = false;
    };

    $scope.signUp = function () {

    };


    $scope.login = function () {

    };

    $scope.processLogin = function (loginInfo) {

    };

    $scope.loginFacebook = function () {

    }
  }
);
