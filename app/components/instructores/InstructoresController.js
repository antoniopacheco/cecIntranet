(function() {
    'use strict';


    angular
        .module('cecintranet')
        .controller('InstructoresController', InstructoresController);


    InstructoresController.$inject = ['$http', '$state', '$scope','instructorService','sedeService'];
    function InstructoresController($http, $state, $scope,instructorService,sedeService) {
    	getExternalData();
        $scope.sedes = [];
        $scope.sedes[0] = {id:0, nombre:'Todos'};
    	$scope.instructores = [];
        $scope.sedeFilter=0;
        $scope.paginas = [];
    	function getExternalData(){
            sedeService.getAll().then(function(response){
                $scope.sedes = $scope.sedes.concat(response.data.sedes);
            });
    		instructorService.getPaginate().then(function(response){
    			$scope.instructores = response.data.data;
    			$scope.pagination = response.data.meta.pagination;
                for(var i = 1; i<= response.data.meta.pagination.total_pages; i++){
                    var active = (i == response.data.meta.pagination.current_page)?true:false;
                    $scope.paginas.push({
                            pagina: i, 
                            active: active
                     });
                }
                console.log($scope.paginas);
                // console.log($scope.pagination.pagination);
    		});
    	}
    }

})();