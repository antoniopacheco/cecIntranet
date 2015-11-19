'use strict';

angular
	.module('cecintranet')
  .service('instructorService', function ($http,$q,ProviderConfigService) {
    return({
      getPaginate : getPaginate,
      getPagination: getPagination,
      getSearch: getSearch
    });

    function getPaginate(){
      return $http.get(ProviderConfigService.apiURL+'instructores').then(handleSuccess,handleError);
    }

    function getPagination(pagina, sede, search){

      var link = ProviderConfigService.apiURL+'instructores?filter=1';
      if(pagina)
        link += '&page='+pagina;
      if(search!='')
        link += '&search='+search;
      if(sede > 0)
        link += '&sede='+sede;
      return $http.get(link).then(handleSuccess,handleError);
    }

    function getSearch(query,sede){
      var link = ProviderConfigService.apiURL+'instructores?';
      if(query != ''){
        link += 'search='+query;
        if(sede > 0)
          link += '&sede='+sede;
      }else if(sede > 0)
        link += 'sede='+sede;
      return $http.get(link).then(handleSuccess,handleError);
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

