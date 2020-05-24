(function () {
    'use strict';
    angular.module('main').controller('headerController', headerController);

    function headerController($scope, $rootScope, $sce) {
        let vm = this;

        $scope.$on('$viewContentLoaded', function () {
            $(window).on('load', function () {
                $(".loader").fadeOut();
                $("#preloder").delay(20000).fadeOut("slow");
            });

        });
        angular.element('.icon_menu').click(function (event) {
            return false;
        });
        angular.element('.btnclick').click(function (event) {
            return false;
        });

        let menu = $('.menu');
        let checktrangthai = false;
        // angular.element('bt')
        angular.element(window).scroll(function () {
            let test = $('html').scrollTop();
            if (test > 60) {
                if (checktrangthai === false) {
                    menu.addClass('menu_len');
                    $('.tren').addClass('test');
                    checktrangthai = true;
                }
            } else {
                if (checktrangthai === true) {
                    menu.removeClass('menu_len');
                    $('.tren').removeClass('test');
                    checktrangthai = false;
                }

            }
            let check = true;
            $(window).scroll(function (event) {
                let test1 = $('html').scrollTop();
                // console.log($('.nutkeo').offset().top - 200);

                if (test1 > 400 && check) {
                    $('.nutkeo').addClass('hienra');
                    check = false;
                } else {
                    $('.nutkeo').removeClass('hienra');
                }
                check = true;

            })
        })
        vm.huytimkiem = function () {
            angular.element('.giohang').removeClass("hien");
            angular.element('.maintk').removeClass("hientimkiem");
            angular.element('.giohang').removeClass("hiengiohang");
            angular.element('.momo').removeClass("hien");
            angular.element('body').removeClass("stop-scrolling");
        }
        vm.hienthitimkiem = function () {
            angular.element('.maintk').addClass("hientimkiem");
        }
        vm.hienthimenu = function () {
            angular.element('.giohang').addClass("hien");
            angular.element('.giohang').addClass("hiengiohang");
            angular.element('.momo').addClass("hien");
            angular.element('body').addClass("stop-scrolling");
        }
        $('.momo').click(function (event) {
            $('.giohang').removeClass('hiengiohang');
            $('.momo').removeClass('hien');
            $('body').removeClass('stop-scrolling');
        });

        vm.check = function () {
            if (vm.dulieu.length > 0) {
                return true;
            } else {
                return false;
            }
        };
        vm.DeleteProduct = function (index) {
            vm.dulieu.splice(index, 1);
        }
        vm.total = 0;
        vm.total1 = 0;
        vm.giamsp = function (index) {
            if (vm.dulieu[index].soluong > 0) {
                vm.dulieu[index].soluong--;
                vm.dulieu[index].TotalMoney = parseFloat(vm.dulieu[index].Price) * vm.dulieu[index].soluong;
                vm.total1 = vm.dulieu[index].soluong;
                vm.total -= vm.dulieu[index].soluong
            }
        }
        vm.tangsp = function (index) {
            vm.dulieu[index].soluong++;
            vm.dulieu[index].TotalMoney = parseFloat(vm.dulieu[index].Price) * vm.dulieu[index].soluong;
            vm.total1 = vm.dulieu[index].soluong;
            vm.total = vm.total1 + vm.dulieu[index].soluong
        }
        vm.tree = [
            {
                id: 1,
                parenID: 0,
                tendulieu: "lv1",
                check: true
            },
            {
                id: 2,
                parenID: 1,
                tendulieu: "lv2",
                check: false
            }, {
                id: 3,
                parenID: 1,
                tendulieu: "lv2",
                check: false
            }, {
                id: 4,
                parenID: 0,
                tendulieu: "lv1",
                check: false
            }, {
                id: 5,
                parenID: 1,
                tendulieu: "lv2",
                check: false
            }, {
                id: 6,
                parenID: 1,
                tendulieu: "lv2",
                check: true
            }, {
                id: 7,
                parenID: 6,
                tendulieu: "lv3",
                check: false
            }, {
                id: 8,
                parenID: 6,
                tendulieu: "lv3",
                check: true
            }, {
                id: 9,
                parenID: 0,
                tendulieu: "lv1",
                check: true
            }, {
                id: 10,
                parenID: 0,
                tendulieu: "lv1",
                check: false
            }, {
                id: 11,
                parenID: 0,
                tendulieu: "lv1",
                check: false
            }, {
                id: 12,
                parenID: 0,
                tendulieu: "lv1",
                check: false
            }, {
                id: 13,
                parenID: 9,
                tendulieu: "lv2",
                check: false
            }, {
                id: 14,
                parenID: 8,
                tendulieu: "lv4",
                check: false
            }, {
                id: 15,
                parenID: 8,
                tendulieu: "lv4",
                check: false
            }, {
                id: 16,
                parenID: 8,
                tendulieu: "lv4",
                check: false
            }
        ];

        vm.dulieu = [
            {
                id: 1,
                link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
                ChatLieu: "Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
                Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
                Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
                Price: "299,000₫",
                soluong: "1",
                TotalMoney: "299,000₫"
            },
            {
                id: 2,
                link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
                ChatLieu: "Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
                Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
                Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
                Price: "399,000₫",
                soluong: "1",
                TotalMoney: "299,000₫"
            },
            {
                id: 3,
                link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
                ChatLieu: "Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
                Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
                Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
                Price: "499,000₫",
                soluong: "1",
                TotalMoney: "299,000₫"
            }
        ]

        vm.htmlStrTxt = "";
        vm.cap = 0;

        function dequy(parent, level, a) {
            if (a == 1) {
                vm.htmlStrTxt = '<ul>';
            }
            if (a != 1) {
                vm.htmlStrTxt = '<ul class="list_tieu_de">';
            }
            a++;
            for (let x = 0; x < vm.tree.length; x++) {
                if (vm.tree[x].parenID == parent) {
                    vm.htmlStrTxt += '<li class="tieu_de level-' + level + '"><a href="" class="nd_tieu_de">' + vm.tree[x].tendulieu + '</a>';
                    if (vm.tree[x].check) {
                        if (level != 0) {
                            vm.htmlStrTxt += '<span class="caret"><i class="fa fa-caret-right" aria-hidden="true"></i></span>'
                        } else {
                            vm.htmlStrTxt += '<span class="caret"><i class="fa fa-caret-down" aria-hidden="true"></i></span>'
                        }
                        vm.htmlStrTxt += dequy(vm.tree[x].id, level + 1);
                    }
                    vm.htmlStrTxt += '</li>';
                }
            }
            if (vm.cap < level) {
                vm.cap = level;
            }
            return vm.htmlStrTxt + '</ul>';
        }

        vm.htmlTxt = dequy(0, 0, 1);
        vm.menudacap = $sce.trustAsHtml(vm.htmlTxt);

        // jquery
        $(function () {
            $('')

            let cap = $('#menu').attr('data-cap');
            for (let i = 0; i < cap + 1; i++) {
                $(".level-" + i).hover(function () {
                    $(this).children('ul').addClass('hienthimenu');
                }, function () {
                    $(this).children('ul').removeClass('hienthimenu');
                })
            }
        })
    }

})();
