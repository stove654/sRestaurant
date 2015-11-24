'use strict';

/**
 * @ngdoc function
 * @name starter.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the starter
 */
angular.module('starter')
  .controller('LoginCtrl', function ($scope, APP_CONFIG, $ionicLoading, $q, $state, localStorageService) {

    $scope.user = {
      username: 'demo' + new Date().getTime(),
      password: 'demo',
      name: 'Harry',
      phone: '0163 867 8364',
      email: 'stove654@gmail.com'
    };

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
      $scope.isForgotPass = false;
    };

    $scope.forgotPass = function () {
      $scope.isForgotPass = true;
      $scope.signin = true;
    };


    $scope.login = function () {
      $scope.processLogin();
    };

    $scope.processLogin = function () {
      $scope.user = {
        username: 'demo' + new Date().getTime(),
        password: 'demo',
        name: 'Harry',
        phone: '0163 867 8364',
        email: 'stove654@gmail.com'
      };
      localStorageService.set('sRestaurantUser', $scope.user);
      $state.go('main.restaurantList')
    };

    $scope.loginFacebook = function () {
      if (!window.cordova) {
        //this is for browser only
        facebookConnectPlugin.browserInit(APP_CONFIG.appFacebookId);
      }

      facebookConnectPlugin.getLoginStatus(function(success){
        if(success.status === 'connected'){
          // the user is logged in and has authenticated your app, and response.authResponse supplies
          // the user's ID, a valid access token, a signed request, and the time the access token
          // and signed request each expire
          console.log('getLoginStatus',success);

          localStorageService.set('sRestaurantUser', {
            username: success.authResponse.userID,
            password: 'demo',
            name: 'Harry',
            phone: '0163 867 8364',
            email: 'stove654@gmail.com'
          })
          $state.go('main.restaurantList')

        } else {
          //if (success.status === 'not_authorized') the user is logged in to Facebook, but has not authenticated your app
          //else The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
          console.log('getLoginStatus',success.status);

          //ask the permissions you need. You can learn more about FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
          facebookConnectPlugin.login(['email', 'public_profile', 'user_about_me', 'user_likes', 'user_location', 'user_posts', 'user_status', 'user_birthday', 'user_photos'], fbLoginSuccess, fbLoginError);
        }
      });
    }

    //This is the success callback from the login method
    var fbLoginSuccess = function(response) {
      if (!response.authResponse){
        fbLoginError("Cannot find the authResponse");
        return;
      }
      console.log('fbLoginSuccess');

      var authResponse = response.authResponse;

      localStorageService.set('sRestaurantUser', {
        username: response.authResponse.userID,
        password: 'demo',
        name: 'Harry',
        phone: '0163 867 8364',
        email: 'stove654@gmail.com'
      })
      $state.go('main.restaurantList')

      getFacebookProfileInfo(authResponse)
        .then(function(profileInfo) {

          console.log('profile info success', profileInfo);
          //for the purpose of this example I will store user data on local storage
        }, function(fail){
          //fail get profile info
          console.log('profile info fail', fail);
        });
    };

    //This is the fail callback from the login method
    var fbLoginError = function(error){
      console.log('fbLoginError');
      $ionicLoading.hide();
    };

    //this method is to get the user profile info from the facebook api
    var getFacebookProfileInfo = function (authResponse) {
      var info = $q.defer();

      facebookConnectPlugin.api('/me?fields=about,bio,birthday,email,name&access_token=' + authResponse.accessToken, null,
        function (response) {
          info.resolve(response);
        },
        function (response) {
          info.reject(response);
        }
      );
      return info.promise;
    }

  }
);
