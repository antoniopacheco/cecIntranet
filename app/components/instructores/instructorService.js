'use strict';

angular
	.module('cecintranet')
  .service('instructorService', function ($http,$q,ProviderConfigService) {
    return({
      getPaginate : getPaginate
    });

    function getPaginate(){
      return $http.get(ProviderConfigService.apiURL+'instructores')
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

