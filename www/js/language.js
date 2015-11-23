'use strict';

/**
 * @ngdoc function
 * @name starter.config:Config language
 * @description
 * # Config language
 * Controller of the starter
 */
angular.module('starter')
  //Config languages
  .config(function($translateProvider) {
    $translateProvider
      .translations('en', {
        "LOGIN_TO_ACCOUNT": "Log in to account",
        "FORGOT_PASSWORD": "Forgot password?",
        "SIGNUP": "Signup",
        "CREATE_ACC": "Create Account",
        "NEED_HELP": "Need help?",
        "ALREADY_SRESTAURANT": "Already on sRestaurant",
        "LOG_IN": "Log in",
        "WELCOME": "Welcome to sRestaurant",
        "MESSAGE_WELCOME": "At Stafford's Pier Restaurant, we have put a great deal of energy into assuring that our guests are welcomed and treated as family while dining at our property.",
        "SKIP": "Skip",
        "RESTAURANTS": "List restaurants",
        "NEARBY": "Nearby",
        "FAVOURITES": "Favourites",
        "PROFILE": "Profile",
        "HELLO": "Hello!",
        "SUBTITLE": "Today's sRestaurant Picks",
        "CONTENT": "We've picked 10 restaurants around you. Let see how hungry you are today!",
        "FOR_HERE": "For here",
        "TAKE_OUT": "Take Out",
        "TAKE_UBER": "Take Uber",
        "RATE": "Rate 'em",
        "START_NAV": "Start Navigation",
        "PHOTO": "Photo",
        "ITEMS_IN_CART": "items in your cart.",
        "PLACE_ORDER": "PLACE ORDER",
        "SWIPE_TO": "SWIPE TO",
        "SELECT": "SELECT"
      })
      .translations('vi', {
        "LOGIN_TO_ACCOUNT": "Đăng nhập với tài khoản",
        "FORGOT_PASSWORD": "Lấy lại mật khẩu",
        "SIGNUP": "Đăng ký",
        "CREATE_ACC": "Tạo tài khoản ",
        "NEED_HELP": "Bạn cần giúp đỡ? ",
        "ALREADY_SRESTAURANT": "Already on sRestaurant",
        "LOG_IN": "Đăng nhập ",
        "WELCOME": "Chào mừng bạn đến với sRestaurant",
        "MESSAGE_WELCOME": "At Stafford's Pier Restaurant, we have put a great deal of energy into assuring that our guests are welcomed and treated as family while dining at our property.",
        "SKIP": "Bỏ qua",
        "RESTAURANTS": "Danh sách nhà hàng ",
        "NEARBY": "Gần nhất ",
        "FAVOURITES": "Favourites",
        "PROFILE": "Thông tin",
        "HELLO": "Xin chào!",
        "SUBTITLE": "Danh sách nhà hàng dành cho bạn hôm nay ",
        "CONTENT": "Chúng tôi đã chọn ra 10 nhà hàng theo khẩu vị và vị trí của bạn. Cám ơn bạn đã quan tâm!",
        "FOR_HERE": "Tại đây",
        "TAKE_OUT": "Mang về ",
        "TAKE_UBER": "Gọi Uber",
        "RATE": "Đánh giá",
        "START_NAV": "Start Navigation",
        "PHOTO": "Ảnh",
        "ITEMS_IN_CART": "đồ trong giỏ hàng",
        "PLACE_ORDER": "PLACE ORDER",
        "SWIPE_TO": "SWIPE TO",
        "SELECT": "SELECT"
      });
    $translateProvider.preferredLanguage('en');
  })
