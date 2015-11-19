'use strict';

angular
	.module('cecintranet')
  .service('sedeService', function ($http,$q,ProviderConfigService) {
    return({
      getAll : getAll
    });

    function getAll(){
      return $http.get(ProviderConfigService.apiURL+'sedes')
    }

    function handleError(response){
      if(!angular.isObject(response.data)||
        !response.data.message){
        return($q.reject("Se produjo un Error desconcocido"));
      }
      return ($q.reject(response.data.message));
    }
    
    function handleSuccess(response){
      return(response.data);
    }     
});

