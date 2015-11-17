'use strict';

angular
	.module('cecintranet')
  .service('profileService', function ($http,$q,ProviderConfigService) {
    return({
      getMyApps : getMyApps
    });

    function getMyApps(){
      return $http.get(ProviderConfigService.apiURL+'yo/aplicaciones')
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

