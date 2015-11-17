(function() {
    'use strict';

	angular.module('cecintranet')
	.config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider){
    	
      $urlRouterProvider.otherwise(function($injector, $location){
        $injector.invoke(['$state', function($state) {
          $state.go('404');
        }]);
      });
        // 
        // Application Routes
        // -----------------------------------   

        //BeforeLogin
        $stateProvider
        .state('login',{
          url : '/login',
          templateUrl: 'app/components/auth/login.html',
          controller: 'LoginController'
        });


     $stateProvider
        .state('logout',{
          controller: 'LogoutController'
        }); 

        $stateProvider
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: 'app/app.html',
             // resolve: helper.resolveFor('modernizr', 'icons')
             
          })
            .state('app.dashboard', {
              url: '/dashboard',
              title: 'Invox Admin Dashboard',
              templateUrl: 'app/components/dashboard/dashboard.html',
              //controller: 'DashboardController',
              // resolve: helper.resolveFor('ngDialog','flot-chart','flot-chart-plugins'),
              // ncyBreadcrumb: {
              //   label: 'inicio'
              // }
          })
    }
        
})();