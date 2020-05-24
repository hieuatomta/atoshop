(function () {
    'use strict';
    angular.module('admin').controller('menuController', menuController);

    function menuController($scope, $rootScope, $timeout, Constant, $http, CommonService) {
        let vm = this;
        $scope.Constant = Constant;

        vm.list_menu = [];
        $http.post('http://localhost:1302/WebProducts/Data/Quyen.json')
            .then(function (response) {
                vm.list_menu = response.data;
            }, function (reason) {
                vm.error = reason.data;
            })

        $rootScope.activeTabIndex = 0;//$scope.tabs.length - 1;

        vm.oneTab= function(menuKey){
            if(menuKey==10 ){
                $rootScope.tabs.push({
                    title: 'Trang chu',
                    template:'Login/d.html'
                });
            }

        }
        vm.goTo = function (menuKey) {
            let check = false;
            let check1 = false;
            let template = Constant.getTemplateUrl(menuKey);

            if ($rootScope.tabs.length > 0) {
                for (let i = 0; i < $rootScope.tabs.length; i++) {
                    if (template != null) {
                        check = true;
                    }
                    if ($rootScope.tabs[i].title == vm.list_menu[menuKey - 1].name) {
                        check1 = true;
                    }
                }
                if ((check && !check1)  ) {
                    $rootScope.tabs.push({
                        title: vm.list_menu[menuKey - 1].name,
                        template:vm.list_menu[menuKey - 1].template
                    });
                }
                $timeout(function () {
                    $rootScope.activeTabIndex = ($rootScope.tabs.length - 1);
                    console.log($rootScope.activeTabIndex)
                });
            } else {
                console.log("sao" + $rootScope.activeTabIndex)

                $rootScope.activeTabIndex = 0;
                $rootScope.tabs.push({
                    title: vm.list_menu[menuKey - 1].name,
                    template:vm.list_menu[menuKey - 1].template
                });
                console.log("sao" + $rootScope.activeTabIndex)

            }


        };

        vm.getMenuText = function (obj) {
            try {
                let template = Constant.getTemplateUrl(obj.id);
                if (template == null) {
                    return obj.name + CommonService.translate("undeploy");
                }
                return template.name;
            } catch (err) {
                console.debug(err);
                return "N/A";
            }
        }

        vm.displaymenu = function () {
            // console.log(angular.element('.list-quantri'));
        }
        angular.element('.off-tab').click(function (event) {
            return false;
        });
        angular.element('#quantri').click(function (event) {
            angular.element('.list-quantri').toggleClass('open')
            angular.element('#quantri').toggleClass('click');
            console.log("asd");

        });
    }
})();