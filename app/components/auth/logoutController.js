(function() {
    'use strict';

    angular
        .module('cecintranet')
        .controller('LogoutController', LogoutController);

    LogoutController.$inject = ['$auth','$state'];
    function LogoutController($auth,$state) {
       $auth.logout();
       $state.go('login');
    }
})();