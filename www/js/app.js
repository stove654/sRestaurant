// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'LocalStorageModule',
  'ngTouch',
  'uiGmapgoogle-maps',
  'pascalprecht.translate'
])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $stateProvider
      .state('intro', {
        url: "/intro",
        templateUrl: "templates/intro.html",
        controller: "IntroCtrl"
      })
      .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: "LoginCtrl"
      })
      .state('main', {
        url: "/main",
        templateUrl: "templates/main.html",
        controller: "MainCtrl"
      })
      .state('main.restaurantList', {
        url: "/restaurantList",
        views: {
          'menuContent': {
            templateUrl: "templates/states/restaurantList.html",
            controller: "RestaurantListCtrl"
          }
        }
      })
      .state('main.restaurant', {
        url: "/restaurant/:id",
        views: {
          'menuContent': {
            templateUrl: "templates/states/restaurant.html",
            controller: "RestaurantCtrl"
          }
        }
      })
      .state('main.category', {
        url: "/category/:type",
        views: {
          'menuContent': {
            templateUrl: "templates/states/category.html",
            controller: "CategoryCtrl"
          }
        }
      })
      .state('main.menu', {
        url: "/menu/:idRestaurant",
        views: {
          'menuContent': {
            templateUrl: "templates/states/menu.html",
            controller: "MenuCtrl"
          }
        }
      })
      .state('main.order', {
        url: "/order/:idRestaurant",
        views: {
          'menuContent': {
            templateUrl: "templates/states/order.html",
            controller: "OrderCtrl"
          }
        }
      })
      .state('main.ordersHistory', {
        url: "/ordersHistory",
        views: {
          'menuContent': {
            templateUrl: "templates/states/orders_history.html",
            controller: "OrdersHistoryCtrl"
          }
        }
      })
      .state('main.orderHistory', {
        url: "/ordersHistory/:id",
        views: {
          'menuContent': {
            templateUrl: "templates/states/order_history.html",
            controller: "OrderHistoryCtrl"
          }
        }
      });

    //$urlRouterProvider.otherwise("/intro");
    $urlRouterProvider.otherwise("/intro");

    $ionicConfigProvider.views.transition('none');
    $ionicConfigProvider.views.maxCache(0);
  });
