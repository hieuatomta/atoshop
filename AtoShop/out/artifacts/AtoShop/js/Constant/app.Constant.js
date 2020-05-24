(function () {
    'use strict';
    angular.module('main').constant('Constant', Config());
    function Config() {
        let config = {};

        config.contextPath = "web";
        config.prefixLanguage = 'js/languages/';
    }

})()