(function () {
    'use strict';
    angular.module('main').controller('HomeController', HomeController);

    function HomeController($scope,$rootScope) {
        let vm = this;
        vm.test = $rootScope.test;

    }
})();
