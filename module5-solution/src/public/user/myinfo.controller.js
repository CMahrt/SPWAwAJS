(function () {
    "use strict";
  
  angular.module('public')
  .controller('MyInfoController', MyInfoController);
  
  MyInfoController.$inject = ['UserService','ApiPath'];
  
  function MyInfoController(UserService,ApiPath) {
    var myinfoctrl=this;
    myinfoctrl.user=UserService.getData();
    myinfoctrl.basePath=ApiPath;
  }
  
  })();