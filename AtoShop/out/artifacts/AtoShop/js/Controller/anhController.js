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

        vm.tree = [
            {
                id: 1,
                parenid: null,
                Name: "VN"

            },
            {
                id: 2,
                parenid: 1,
                Name: "HN"

            }, {
                id: 3,
                parenid: 1,
                Name: "HCM"

            }, {
                id: 4,
                parenid: 2,
                Name: "GL"

            }, {
                id: 5,
                parenid: 2,
                Name: "CG"

            }, {
                id: 6,
                parenid: 3,
                Name: "Q3"

            }, {
                id: 7,
                parenid: 5,
                Name: "XT"

            }];
        for(let i=0;i<vm.tree.length;i++){
            if(vm.tree[0].id== vm.tree[1].parenid){

            }
        }

        vm.anh = [{
            id: 1,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
            Code: "sp1",
            Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 2,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp2", Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp3",
            Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp3",
            Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp1",
            Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 4,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp1",
            Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 3,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp3",
            Name: "as asd ",
            Price: "500.000 đ"
        }, {
            id: 4,
            link: "https://product.hstatic.net/1000299894/product/1.2.02.1.14.001.120.01.10100011___2__d1a3b09d04394dcd8277330c39f975cd.jpg",
            Code: "sp4",
            Name: "as asd ",
            Price: "500.000 đ"
        }
            // , {
            //     id: 5,
            //     link: "anh/DSC_0480.png",
            //     Code: "anh2"
            // }, {
            //     id: 6,
            //     link: "anh/DSC_0505.png",
            //     Code: "anh4"
            // }, {
            //     id: 7,
            //     link: "anh/anh.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 8,
            //     link: "anh/Duplicate State.png",
            //     Code: "anh2"
            // }, {
            //     id: 9,
            //     link: "anh/DSC_1225-2.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 10,
            //     link: "anh/IMG_5393.JPG",
            //     Code: "anh2"
            // }, {
            //     id: 11,
            //     link: "anh/ư.png",
            //     Code: "anh3"
            // }, {
            //     id: 12,
            //     link: "anh/IMG_5970.png",
            //     Code: "anh2"
            // }, {
            //     id: 13,
            //     link: "anh/DSC_1225-2.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 14,
            //     link: "anh/IMG_5393.JPG",
            //     Code: "anh2"
            // }, {
            //     id: 15,
            //     link: "anh/IMG_5970.png",
            //     Code: "anh2"
            // }, {
            //     id: 16,
            //     link: "anh/DSC_1225-2.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 17,
            //     link: "anh/DSC_1225-2.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 18,
            //     link: "anh/DSC_1225-2.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 19,
            //     link: "anh/DSC_1225-2.jpg",
            //     Code: "anh3"
            // }, {
            //     id: 20,
            //     link: "anh/IMG_5393.JPG",
            //     Code: "anh2"
            // }


        ];

        $(function () {
            $('.all').click(function (event) {
                if ($(this).data('dulieu') === "all") {
                    $('header nav .btn').removeClass('action');
                    $('.content ul').isotope({
                        filter: '*'
                    });
                }
            })
            $('nav ul li button').click(function (event) {
                let danhmuc = "." + $(this).data('dulieu');
                $('header nav .btn').removeClass('action');
                $(this).addClass('action');
                $('.content ul').isotope({filter: danhmuc});


            });
            $('.content a').click(function (event) {
                $('.nutkeo').animate({scrollTop: 0}, 1000);
                return false;
            });
            $('.nutkeo').click(function (event) {
                $('html').animate({scrollTop: 0}, 1000);
                return false;
            });
            let check = true;
            $(function () {
                $(window).scroll(function (event) {
                    let test = $('html').scrollTop();
                    console.log($('.nutkeo').offset().top - 200);

                    if (test > 400 && check) {
                        $('.nutkeo').addClass('hienra');
                        check = false;
                    } else {
                        $('.nutkeo').removeClass('hienra');
                    }
                    check = true;

                })
            });

        });

    }

})();
