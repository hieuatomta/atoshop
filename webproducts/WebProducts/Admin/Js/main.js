$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    if (options.type.toLowerCase() === "post" || options.type.toLowerCase() === "put" ||
        options.type.toLowerCase() === "delete" || options.type.toLowerCase() === "options") {
        // add _token entry
        jqXHR.setRequestHeader("X-CSRF-TOKEN", readCookie('XSRF-TOKEN'))
    }
});

function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

let admin = angular.module('admin', [
    'ui.bootstrap',
    "ui.router",
    'ngSanitize',
    "oc.lazyLoad",
    'pascalprecht.translate',
    'ngCookies',
    'ngRoute',
]);

admin.config(function ($stateProvider, $locationProvider, $qProvider) {
    $qProvider.errorOnUnhandledRejections(false)

    $locationProvider.hashPrefix('');
    $stateProvider
        .state('index', {
            url: '',
            templateUrl: 'Dashboard/TrangChu.html',
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'admin',
                        // files: [
                        //     // 'assets/global/plugins/jquery.sparkline.min.js',
                        //     // 'assets/pages/scripts/dashboard.js',
                        //     // 'erp/common/DashboardController.js',
                        // ]
                    });
                }]
            },
        })
        .state('login', {
            url: '/login',
            templateUrl: 'Login/login.html',
            controller: 'LoginController'
        })
        .state('changePassword', {
            url: '/changePassword',
            templateUrl: 'Login/ChangePassword.html'
        })

});
admin.config(function () {
    angular.lowercase = angular.$$lowercase;
});
admin.config(['$translateProvider', 'Constant', function ($translateProvider, Constant) {
    $translateProvider.useStaticFilesLoader({
        prefix: Constant.prefixLanguage,
        suffix: '.json'
    }).preferredLanguage('vi_VN');
}]);
/* Setup global settings */
admin.factory('settings', ['$rootScope', function ($rootScope) {
    // supported languages
    let settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
    };

    $rootScope.settings = settings;

    return settings;
}]);
admin.run(["$rootScope", "$state", "settings", "Constant", function ($rootScope, $state, settings, Constant) {
    // Idle.watch();
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed fromc view
    window.location = "/WebProducts/Admin/#/login";
}]);

admin.controller('HeaderController', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {
    $scope.fullName = $rootScope.authenticatedUser.user;
    angular.element('#logout').click(function (event) {
        return false;
    });
    $scope.logout = function () {
        $rootScope.authenticatedUser = {};
        $rootScope.isCheck = false;
        $rootScope.$state.go("login");
        // Restangular.one("usersService/logout").get().then(function (response) {
        //     $rootScope.$state.go("login");
        // }).catch(function (err) {
        //     console.log('Không kết nối dữ liệu ' + err.message);
        // });

    };
}]);


admin.controller('FooterController', ['$scope', '$rootScope', function ($scope, $rootScope) {

    // $scope.$on('$includeContentLoaded', function () {
    //     // Layout.initFooter(); // init footer
    // });
}]);

admin.controller('TabsController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    let vm = this;
    $rootScope.tabs = [];
    vm.test = function (index,event) {
        $rootScope.activeTabIndex = index;
    }
    // $rootScope.activeTabIndex=0;
    vm.remove = function (index, event) {
        event.preventDefault();
        console.log('Xoa'+index);
        $rootScope.tabs.splice(index, 1);
        console.log('Xoa1 '+index);
        console.log('Xoa '+$rootScope.activeTabIndex);
        // $rootScope.activeTabIndex = $rootScope.tabs.length;
        if(index== $rootScope.activeTabIndex){
            $rootScope.activeTabIndex = $rootScope.tabs.length;
        }
        else {
            $rootScope.activeTabIndex -=1;
        }
        console.log('Xoa'+$rootScope.activeTabIndex)

    };
}])
;

admin.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;

    $httpProvider.defaults.xsrfCookieName = 'XSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';

}]);
// admin.factory('myHttpResponseInterceptor', ['$q', '$cookies', 'Constant', function ($q, $cookies, Constant) {
//     return {
//         // optional method
//         'request': function (config) {
//             // do something on success
//             config.withCredentials = true;
//             if ('20170909') {
//                 /*if(config.url.indexOf('tab.html')>=0||config.url.indexOf('tooltip-html-popup')>=0||config.url.indexOf('tabset.html')>=0){
//                     console.log(config.url);
//                     return config;
//                 }*/
//                 if (!Constant.inWhiteListAddVersion(config.url))
//                     config.url = config.url + "?tsVersion=" + version;
//                 else {
//                     /*console.log(config.url);
//                     console.log(config);*/
//                 }
//             }
//
//             return config;
//         },
//
//         // optional method
//         'requestError': function (rejection) {
//             // do something on error
//             return $q.reject(rejection);
//         },
//
//         // optional method
//         'response': function (response) {
//             // do something on success
//             return response;
//         }
//         //,
//     };
// }]);
// admin.config(function ($httpProvider) {
//     $httpProvider.interceptors.push('myHttpResponseInterceptor');
// });