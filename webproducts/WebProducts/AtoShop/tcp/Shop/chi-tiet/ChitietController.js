(function () {
    'use strict';
    angular.module('main').controller('ChitietController', ['$scope', '$rootScope', '$http',
        function ($scope, $rootScope, $http) {
            let vm = this;
            debugger;
            vm.data = [];
            $http.get('http://localhost:1302/WebProducts/Data/ChiTiet.json')
                .then(function (response) {
                    vm.data = response.data;
                    console.log(vm.data);
                }, function (reason) {
                    vm.error = reason.data;
                })


            // xu ly cai chitiet
            angular.element('.ndctsp1khoi').slideUp();
            angular.element('._1khoichitiet h3').click(function () {
                angular.element(this).next().slideToggle();
            })
            $('.tat').click(function (event) {
                $('.size').removeClass('hiensize')
                $('.maintk').removeClass('hientimkiem');
                $('body').removeClass('stop-scrolling');
            });
            angular.element('#bangsize').click(function () {
                angular.element('.size').addClass('hiensize')
                angular.element('body').addClass('stop-scrolling');
                return false;
            });
            let product_info = angular.element('.khunganhspchitiet');
            let el = angular.element('.cuonchuot');
            let stickyTop = (el.offset().top) + 0;
            let wFix = angular.element(".noidungspchitiet").width();

            angular.element(window).scroll(function () {
                let footerTop = (angular.element('.content').offset().top - 120);
                let stickyHeight = el.height();
                let height_info = product_info.height();
                let limit = footerTop - stickyHeight - 50;
                let windowTop = angular.element(window).scrollTop();
                let windowsize = angular.element(window).width();
                if (windowsize > 767) {
                    if (height_info <= stickyHeight) {
                    } else {
                        if (stickyTop <= windowTop) {
                            el.css({
                                position: 'fixed',
                                top: 50,
                                width: wFix,
                            });
                        } else {
                            el.css({
                                'position': 'static',
                                'top': '0',
                                'width': 'initial',
                            });
                        }
                        if (limit < windowTop) {
                            let diff = limit - windowTop;
                            el.css({
                                top: diff
                            });
                        }
                    }
                }
            });


        }

    ])
})
();
