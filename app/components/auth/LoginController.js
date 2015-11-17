
/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('cecintranet')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$state','ProviderConfigService','$localStorage','$auth', '$scope','profileService'];
    function LoginController($http, $state,ProviderConfigService,$localStorage,$auth, $scope,profileService) {
        if($auth.isAuthenticated()){
            $state.go('app.dashboard');
        }

     
          $scope.login = function() {
            $scope.authMsg = '';

            if($scope.loginForm.$valid) {
              $auth.login({email: $scope.account.email, password: $scope.account.password})
              if($auth.isAuthenticated()){
                profileService.getMyApps().then(
                  function(data){
                    $localStorage.aplicaciones = data.data.privilegios
                  }
                )
                $state.go('app.dashboard');
              }
            }
            else {

              $scope.loginForm.account_email.$dirty = true;
              $scope.loginForm.account_password.$dirty = true;
            }
          };
    
    }
})();
