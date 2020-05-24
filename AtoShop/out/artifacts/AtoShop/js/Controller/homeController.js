(function () {
    'use strict';
    angular.module('main').controller('HomeController', HomeController);

    function HomeController($scope,$rootScope) {
        let vm = this;
        vm.test = $rootScope.test;

        // $(function () {
        //     $("#typed").typed({
        //         stringsElement: $('#typed-strings'),
        //         typeSpeed: 0,
        //         loop: true,
        //         showCursor: false
        //     });
        // });
    }
})();
