
let app = angular.module('main', [
    'ui.bootstrap',
    "ui.router",
    'ngSanitize',
    "oc.lazyLoad",
    'pascalprecht.translate',
    'ngCookies',
    'ngRoute'
]);


app.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: 'tcp/Shop/home/trangchu.html'
    }).when('/detail', {
        templateUrl: 'tcp/Shop/chi-tiet/chitiet.html'
    }).when('/thanh-toan',{
        templateUrl:'tcp/Shop/thanh-toan/thanhtoan.html'
    }).when('/gio-hang',{
        templateUrl:'tcp/Shop/gio-hang/giohang.html'
    }).otherwise('/');
})

// app.run(["$rootScope"],function ($rootScope) {
//     console.log("sad");
//     window.location = "/WebProducts/AtoShop/tcp/Shop/#/"
// })

