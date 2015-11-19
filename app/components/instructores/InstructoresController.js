(function() {
    'use strict';


    angular
        .module('cecintranet')
        .controller('InstructoresController', InstructoresController);


    InstructoresController.$inject = ['$http', '$state', '$scope','instructorService','sedeService','$sce'];
    function InstructoresController($http, $state, $scope,instructorService,sedeService,$sce) {
    	getExternalData();
        $scope.sedes = [];
        $scope.sedes[0] = {id:0, nombre:'Todos'};
    	$scope.instructores = [];
        $scope.sedeFilter=0;
        $scope.paginas = [];
        $scope.searchQuery = '';
    	function getExternalData(){
            sedeService.getAll().then(function(response){
                $scope.sedes = $scope.sedes.concat(response.data.sedes);
            });
    		instructorService.getPaginate().then(function(response){
    			$scope.instructores = response.data;
                setMetas(response);
    		});
    	}

        $scope.change_pagina = function(pagina){
            instructorService.getPagination(pagina, $scope.sedeFilter, $scope.searchQuery).then(
                function(response){
                    $scope.instructores = response.data;
                    setMetas(response);
                }
            );
        }

        function setMetas(response){
            $scope.paginas = [];
            $scope.pagination = response.meta.pagination;
                $scope.current_page = response.meta.pagination.current_page;
                if(response.meta.pagination.total_pages <= 11){
                    var inicio = 1;
                    var fin = response.meta.pagination.total_pages;
                }else{
                    var inicio = (response.meta.pagination.current_page - 5 <= 0)?1:response.meta.pagination.current_page - 5;
                    var fin = (response.meta.pagination.current_page +5 >= response.meta.pagination.total_pages)?response.meta.pagination.total_pages:response.meta.pagination.current_page +5;
                }

                for(var i = inicio; i<= fin; i++){
                    var active = (i == response.meta.pagination.current_page)?true:false;
                    $scope.paginas.push({
                            pagina: i, 
                            active: active
                     });
                }
        }

        $scope.update_query = function(){
            instructorService.getSearch($scope.searchQuery,$scope.sedeFilter).then(function(response){
                $scope.instructores = response.data;
                setMetas(response);
            })
        }

        $scope.getHtml = function(html){
            return $sce.trustAsHtml(html);
        };

      
    }

})();