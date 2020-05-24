(function () {
    'use strict';
    angular.module('main').controller('headerController', headerController);

    function headerController($scope,$rootScope) {
        let vm = this;
        vm.test = $rootScope.test;
        $scope.$on('$includeContentLoaded', function () {
            Layout.initHeader(); // init header
        });

    }
})();
