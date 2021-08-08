(function () {
'use strict';
angular
  .module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems', foundItemsDirective)
  .constant('URL_MENUITEMS',"https://davids-restaurant.herokuapp.com/menu_items.json")
  ;
  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
    };
  
    return ddo;
  }

  function NarrowItDownDirectiveController(){
    var ctrl=this;
    ctrl.listIsEmpty =function(){
            return ctrl.found.length===0 ;
    } 
  }
  
  NarrowItDownController.$inject=['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl=this;
    ctrl.found=[];
    ctrl.searchTerm="";

    ctrl.narrowDown=function(){
      if(ctrl.searchTerm.length>0){
        var promise=MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        promise.then(function(response){
           ctrl.found=response.found;
        })
  
      }else{
        ctrl.found=[];
      }
   
        
      };

    ctrl.removeItem = function(index){
      ctrl.found.splice(index,1);
    }
  }
  MenuSearchService.$inject=['$http', 'URL_MENUITEMS']
  function MenuSearchService($http, URL_MENUITEMS){
    var service=this;
    service.getMatchedMenuItems = function(searchTerm){
      var httppromise = $http({
          method : "GET",
          url : URL_MENUITEMS
     }).then(function(response){
      response.found=response.data.menu_items.filter(function(item){
        return item.description.toLowerCase().includes(searchTerm.toLowerCase()) ;
      });
      return response;
     });    
     return httppromise;
  };
}

})();
