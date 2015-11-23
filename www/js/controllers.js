angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicPopover, $translate, localStorageService) {


    $scope.locales = [
      {
        name: 'English',
        img: './images/en.png',
        locate: 'en'
      },
      {
        name: 'Tiếng Việt',
        img: './images/vi.png',
        locate: 'vi'
      }
    ];

    $scope.selectLangId = function (lang) {
      $scope.selectedLang = lang;
      $translate.use($scope.selectedLang.locate);
      localStorageService.set('language', lang)
      $scope.closePopover();
    };

    var _init = function () {
      if (localStorageService.get('language')) {
        $scope.selectedLang = localStorageService.get('language');
      } else {
        $scope.selectedLang = $scope.locales[0]
      }
      $translate.use($scope.selectedLang.locate);
    };
    _init();

    // .fromTemplateUrl() method
    $ionicPopover.fromTemplateUrl('js/directives/dropdow_language.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });


    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };
    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    $scope.clearOrderHistory = function () {
      localStorageService.remove('sRestaurantHistory');
    }

  })
