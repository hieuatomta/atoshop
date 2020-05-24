(function () {
    'use strict';
    angular.module('main').controller('resumeController', ['CommonService', '$scope',
        function (CommonService, $scope) {
            let vm = this;
            vm.noidungs = [{
                id: 1,
                time: "2011-2013",
                Name: "THPT Yen Vien",
                chitiet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eaasdasdasdasdasdasda da sdsa d "
            },
                {
                    id: 2,
                    time: "2011-2013",
                    Name: "THPT Yen Vien",
                    chitiet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt incididunt incididunt incididunt incididunt incididunt incididunt incididunt incididunt incididunt incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eaasdasdasdasdasdasda da sdsa d "
                },
                {
                    id: 3,
                    time: "2011-2013",
                    Name: "THPT Yen Vien",
                    chitiet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eaasdasdasdasdasdasda da sdsa d "
                },
                {
                    id: 4,
                    time: "2011-2013",
                    Name: "THPT Yen Vien",
                    chitiet: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eaasdasdasdasdasdasda da sdsa d "
                }

            ];

            vm.kynangs = [{
                id: 1,
                Name: "HTML",
                trinhdo: "90"
            },
                {
                    id: 2,
                    Name: "HTML",
                    trinhdo: "10"
                },
                {
                    id: 3,
                    Name: "HTML",
                    trinhdo: "20"
                }
            ];

             // CommonService.populatePopupCreate();

        }])
})();
