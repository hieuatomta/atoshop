(function () {
    'use strict';
    angular.module('admin').controller('LoginController', LoginController);

    function LoginController($scope,$rootScope, $location,$cookies) {
        let vm = this;
        vm.userLogin={};
        vm.checkghinho=true;
        document.addEventListener('keyup', function(event) {
            if ($("#login-form").length>0 && event.code == 'Enter') {
                vm.Login();
            }
        });

        if($cookies.get('remember')){
            vm.userLogin.user=$cookies.get('username');
            vm.userLogin.pass=$cookies.get('password');
        }
        angular.element('#changePass').click(function (event) {
            return false;
        });
        vm.Login=function(){
            if(vm.checkghinho){
                $cookies.put('username', vm.userLogin.user);
                $cookies.put('password', vm.userLogin.pass);
                $cookies.put('remember', true);
            } else {
                $cookies.put('username', "");
                $cookies.put('password', "");
                $cookies.put('remember', false);
            }
            let user = vm.userLogin.user;
            let pass = vm.userLogin.pass;
            if(  user =='admin' &&  pass =='admin'){
                $rootScope.isCheck = true;
                $rootScope.authenticatedUser = vm.userLogin;
                $rootScope.$state.go("index");
            }
            else {
                $rootScope.$state.go('login')
            }
        }
        vm.changePass=function(){
            $rootScope.$state.go('changePassword')
        }
        vm.clear=function(){
            vm.userLogin={};
        }
    }
})();
