'use strict';

/**
 * @ngdoc function
 * @name starter.controller:RestaurantCtrl
 * @description
 * # RestaurantCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('RestaurantCtrl', ['$scope', 'localStorageService', '$state', '$compile', '$stateParams', '$restful',
    function ($scope, localStorageService, $state, $compile, $stateParams, $restful) {
      $scope.restaurant = localStorageService.get('restaurant');
      $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 16};
      $scope.idRes = $stateParams.id;
      console.log($scope.idRes);
      $restful.get({table: 'Site', id: $scope.idRes}, function (resp) {
        $scope.detailRes = resp.data;
        console.log(resp.data);
      });


      $scope.onWatchSuccess = function (position) {
        //console.log(position.coords.latitude);
        //console.log(position.coords.longitude);

        $scope.$apply(function () {
          //$scope.map = { center: { latitude: position.coords.latitude, longitude: position.coords.longitude }, zoom: 20, type: google.maps.MapTypeId.SATELLITE };
          $scope.map = {center: {latitude: position.coords.latitude, longitude: position.coords.longitude}, zoom: 16};
        });
      };

      $scope.onWatchError = function (error) {
        console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
      };

      $scope.watchGeoLoc = function () {
        var watchID = navigator.geolocation.watchPosition($scope.onWatchSuccess, $scope.onWatchError, {timeout: 36000000});
      };

      $scope.bookmarkRestaurant = function (event) {
        event.stopPropagation();
        $scope.restaurant.hearth = !$scope.restaurant.hearth;
      };

      $scope.watchGeoLoc();
    }]);
