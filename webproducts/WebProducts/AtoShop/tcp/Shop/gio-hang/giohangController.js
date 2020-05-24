// (function () {
//     'use strict';
//     angular.module('main').controller('giohangController', giohangController);
//
//     function giohangController($scope, $rootScope) {
//         let vm = this;
//         vm.check=function () {
//             if(vm.dulieu.length>0){
//                return true;
//             }
//             else {
//                 return false;
//             }
//         };
//
//         vm.giamsp = function (index) {
//             if (vm.dulieu[index].soluong > 0) {
//                 vm.dulieu[index].soluong--;
//                 vm.dulieu[index].TotalMoney=parseFloat(vm.dulieu[index].Price)*vm.dulieu[index].soluong;
//             }
//         }
//         vm.tangsp = function (index) {
//             vm.dulieu[index].soluong++;
//             vm.dulieu[index].TotalMoney=parseFloat(vm.dulieu[index].Price)*vm.dulieu[index].soluong;
//         }
//         vm.DeleteProduct=function(index){
//             vm.dulieu.splice(index,1);
//         }
//         vm.dulieu = [
//             {
//                 id: 1,
//                 link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
//                 ChatLieu:"Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
//                 Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
//                 Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
//                 Price: "299,000₫",
//                 soluong:"1",
//                 TotalMoney: "299,000₫"
//             },
//             {
//                 id: 2,
//                 link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
//                 ChatLieu:"Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
//                 Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
//                 Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
//                 Price: "399,000₫",
//                 soluong:"1",
//                 TotalMoney: "299,000₫"
//             },
//             {
//                 id: 3,
//                 link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
//                 ChatLieu:"Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
//                 Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
//                 Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
//                 Price: "499,000₫",
//                 soluong:"1",
//                 TotalMoney: "299,000₫"
//             },
//             {
//                 id: 3,
//                 link: "https://product.hstatic.net/1000299894/product/1.2.02.1.02.075.120.01.11000021___6__78fdef92d54f4bb1bcbd6d61b6bca8cd.jpg",
//                 ChatLieu:"Vàng/ Yellow + Gold / Solid.Vàng/ Yellow + Gold.Vàng Yellow / L",
//                 Code: "Mã sản phẩm: 1.2.02.1.14.001.120.01",
//                 Name: "ÁO PHÔNG NỮ FIT TRAVEL TIME",
//                 Price: "499,000₫",
//                 soluong:"1",
//                 TotalMoney: "299,000₫"
//             }
//         ]
//     }
// })();
