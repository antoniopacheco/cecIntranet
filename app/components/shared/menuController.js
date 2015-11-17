(function() {
    'use strict';


    angular
        .module('cecintranet')
        .controller('menuController', menuController);


    menuController.$inject = ['$http', '$state','ProviderConfigService','$localStorage', '$scope','profileService'];
    function menuController($http, $state,ProviderConfigService,$localStorage, $scope,profileService) {
    	//$scope.aplicaciones = $localStorage.aplicaciones;
    	$scope.menu = [];
    	$scope.currentState = $localStorage.currentSeccion
    	angular.forEach($localStorage.aplicaciones, function(aplicacion){
    		switch(aplicacion.aplicacion_id){
    			case '1':
    				var url = 'app.directorio';
    				var icono = 'fa-book';
    			break;
    			case '2':
    				var url = 'app.instructores';
    				var icono ='fa-graduation-cap';
    			break;
    			case '3':
    				var url = 'app.aplicaciones';
    				var icono ='fa-wrench';
    			break;
    			case '4':
    				var url = 'app.grupos';
    				var icono = 'fa-building';
    			break;
    			case '5':
    				var url = 'app.oferta';
    				var icono = 'fa-bookmark';
    			break;
    			case '6':
    				var url = 'app.pagos';
    				var icono = 'fa-money';
    			break;
    			case '7':
    				var url = 'app.alumnos';
    				var icono = 'fa-users';
    			break;
    			case '8':
    				var url = 'app.usuarios';
    				var icono = 'fa-user-secret';
    			break;
    			case '9':
    				var url = 'app.servicios';
    				var icono = 'fa-wrench'; 
    			break;
    			case '10':
    				var url = 'app.constancias';
    				var icono = 'fa-files-o';
    			break;
    		}
    		$scope.menu.push({
    			aplicacion: aplicacion.aplicacion.nombre,
    			url: url,
    			icono: icono
    		}
    		);
    	});
    }

})();