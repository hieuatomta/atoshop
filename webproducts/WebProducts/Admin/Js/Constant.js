(function () {
    'use strict';

    angular.module('admin').constant('Constant', Config());

    function Config() {
        let config = {};
        config.BASE_SERVICE_URL = 'http://localhost:1302/WebProducts/Admin/';
        config.prefixLanguage = 'Js/languages/';

        // config.LIST_WHITE_LIST_VERSION_URL = [
        //     "template/tabs/tab.html", "template/tabs/tabset.html",
        //     "template/tooltip/tooltip-html-popup.html"],
        //     config.inWhiteListAddVersion = function (url) {
        //         if (url.startsWith(config.BASE_SERVICE_URL)) {
        //             return true;
        //         }
        //         if (url.startsWith('template/')) {
        //             return true;
        //         }
        //         if (url.indexOf('?tsVersion=')) {
        //             return true;
        //         }
        //         for (let str in config.LIST_WHITE_LIST_VERSION_URL) {
        //             if (url
        //                 .indexOf(config.LIST_WHITE_LIST_VERSION_URL[str]) >= 0) {
        //                 return true;
        //             }
        //         }
        //     }

        config.TEMPLATE_URL = [
            {
                id: 1,
                name: 'Quan tri nguoi dung',
                key: ''
            },
            {
                id: 2,
                name: 'Quan tri chuc nang ',
                key: ''
            },
            {
                id: 5,
                name: 'Quan tri kho',
                key: ''
            }
        ];

        config.getTemplateUrl = function (key) {
            for (let i in config.TEMPLATE_URL) {
                if (config.TEMPLATE_URL[i].id == key) {
                    return config.TEMPLATE_URL[i];
                }
            }
            return null;
        }
        return config;
    }



})();
