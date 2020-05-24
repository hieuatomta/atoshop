(function () {
    'use strict';
    angular.module('main').controller('slideLeftController', ['$scope', '$uibModal',
        function ($scope, $uibModal) {
            let vm = this;
            vm.checkhihi = checkhihi;

            function checkhihi() {
                $uibModal.open({
                    options: {
                        modal: true,
                        title: "SAdsad",
                        actions: ["Minimize", "Maximize", "Close"]
                    },
                    template: 'this is '
                }).result.then(function(){}, function(res){});

            };

            vm.dulieus = [{
                id: 1,
                title: "Home"
            },
                {
                    id: 2,
                    title: "about me"
                },
                {
                    id: 3,
                    title: "my resume"
                },
                {
                    id: 4,
                    title: "portfolio"
                },
                {
                    id: 5,
                    title: "my blog"
                },
                {
                    id: 6,
                    title: "contact"
                }
            ];
        }]);

})();
