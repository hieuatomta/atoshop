(function () {
    'use strict';
    angular.module('admin').factory('CommonService', [ 'Constant','$translate',function (Constant,$translate) {
        let factory = {
            populatePopupCreate: populatePopupCreate,
            translate: translate
        }
        return factory;

        function translate(text) {
            try {
                return $translate.instant(text);

            } catch (err) {
                return text;
            }
        }

        function populatePopupCreate() {


        }

    }]);
})();

