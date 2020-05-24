let app = angular.module('main', ['ui.bootstrap', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    // $urlRouterProvider.otherwise('');

    $stateProvider.state('index', {
        url: "",
        templateUrl: 'Ato/index.html',
    })
        .state('test', {
            url: "/giohang",
            templateUrl: 'Ato/GioHang.html',
            // controller: "LoginController",
        })

}]);

app.config(['$ocLazyLoadProvider', 'scrollableTabsetConfigProvider', 'RestangularProvider', '$uibTooltipProvider', function ($ocLazyLoadProvider,
                                                                                                                                     scrollableTabsetConfigProvider, RestangularProvider, $uibTooltipProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
    });

    scrollableTabsetConfigProvider.setShowTooltips(true);
    scrollableTabsetConfigProvider.setAutoRecalculate(true);
    scrollableTabsetConfigProvider.setTooltipLeftPlacement('bottom');
    scrollableTabsetConfigProvider.setTooltipRightPlacement('left');
    $uibTooltipProvider.options({
        appendToBody: true
    });

    RestangularProvider.setBaseUrl(API_URL);

    RestangularProvider.setDefaultHttpFields({withCredentials: true});


}]);

app.run(["$rootScope", "settings", "$state", "gettextCatalog", "Idle", "Restangular", "Constant", function ($rootScope, settings, $state, gettextCatalog, Idle, Restangular, Constant) {
    // start watching when the app runs. also starts the Keepalive service by default.
    Idle.watch();
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view

    Restangular.setErrorInterceptor(function (response, deferred, responseHandler) {
        if (response.status === 401) {
            $rootScope.authenticatedUser = null;
            // $(".k-window .k-header .k-window-actions .k-i-close").click();
            window.location = "/AtoShop/#/"
            return false; // error handled
        } else if (response.status === 492) {
            $rootScope.authenticatedUser = null;
            $('body').addClass('page-on-load')
            alert("Bạn chưa được phân quyền vào ứng dụng");
            return false; // error handled
        }
        return true; // error not handled
    });

    if ($rootScope.authenticatedUser == undefined || $rootScope.authenticatedUser == null) {
        console("Ko co quyen")
    }


    gettextCatalog.currentLanguage = 'vi';
    gettextCatalog.debug = false;
}]);

$(function () {
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(20000).fadeOut("slow");
    });
    let menu = $('.menu');

    let checktrangthai = false;
    $(window).scroll(function (event) {
        let test = $('html').scrollTop();
        if (test > 60) {
            if (checktrangthai === false) {
                menu.addClass('menu_len');
                checktrangthai = true;
            }
        } else {
            if (checktrangthai === true) {
                menu.removeClass('menu_len');
                checktrangthai = false;
            }

        }
    });
    $('.icon_menu').click(function (event) {
        console.log("sda");
        $('.den').toggleClass('len');
        $('.noidungto').toggleClass('hien');
        $('.thong_tin').toggleClass('display_info');

    });
//     $(window).scroll(function (event) {
//         let test = $('html').scrollTop();
//         let test1 = $('.myresume').offset().top;
//         // console.log(test);
//         var check ;
//         if(test>400 && check){
//             check = true;
//             console.log($('.slide-right').scrollTop());
//             console.log($('.thanh').offset().top);
//
//         }
//         else {
//             check = false;
//             console.log(test1);
//         }
//
//     })
});


