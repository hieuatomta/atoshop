(function () {
    'use strict';
    angular.module('main').controller('anhController', anhController);

    function anhController($scope, $rootScope) {
        let vm = this;
        vm.data_dulieu = [
            {
                id: 1,
                madulieu: "sp1",
                tendulieu: "Áo Phông"
            },
            {
                id: 2,
                madulieu: "sp2",
                tendulieu: "Áo Sơ mi"
            }, {
                id: 3,
                madulieu: "sp3",
                tendulieu: "Quần Short"
            }, {
                id: 4,
                madulieu: "sp4",
                tendulieu: "Quần JEANs"
            }
        ]


        vm.anh = [{
            id: 1,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 2,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 4,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }, {
            id: 4,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Name: 'ÁO PHÔNG NỮ LOGO MARVEL LOOSE MARVEL SILVER',
            Code: '1.2.02.1.02.071.120.01',
            Price: ' 449,000₫'
        }
        ];

        angular.element(function () {
            angular.element('.all').click(function (event) {
                if (angular.element(this).data('dulieu') === "all") {
                    angular.element('header nav .btn').removeClass('action');
                    angular.element('.content ul').isotope({
                        filter: '*'
                    });
                }
            })
            angular.element('nav ul li button').click(function (event) {
                let danhmuc = "." + angular.element(this).data('dulieu');
                angular.element('header nav .btn').removeClass('action');
                angular.element(this).addClass('action');
                angular.element('.content ul').isotope({filter: danhmuc});


            });
            angular.element('.content a').click(function (event) {
                angular.element('.nutkeo').animate({scrollTop: 0}, 1000);
                // return false;
            });
            angular.element('.nutkeo').click(function (event) {
                angular.element('html').animate({scrollTop: 0}, 1000);
                return false;
            });

        });

    }

})();
