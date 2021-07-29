(function () {
'use strict';

angular
  .module('ShoppingListCheckOff',[])
  .controller("ToBuyController",ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService)
  ;

  ToBuyController.$inject= ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyController=this;

    toBuyController.items=ShoppingListCheckOffService.getToBuy();
    toBuyController.everythingBought=function(){
      return ShoppingListCheckOffService.everythingBought();
    };  

    toBuyController.bought= function(){
       ShoppingListCheckOffService.bought();
    }

  };
  AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBoughtController=this;

    alreadyBoughtController.items=ShoppingListCheckOffService.getalreadyBought();
    alreadyBoughtController.nothingBought=function(){
      return ShoppingListCheckOffService.nothingBought();
    };  
  };
  function ShoppingListCheckOffService(){
    var shoppingListCheckOffService=this;
    var toBuyList=[
      {
        name : "cookies",
        quantity : 10
      },
      {
        name : "chocolates",
        quantity : 5
      },
      {
        name : "gumdrops",
        quantity : 100
      },
      {
        name : "chips",
        quantity : 2
      },
      {
        name : "Slimming pills",
        quantity : 50
      }
    ];
    var alreadyBoughtList=[];
    shoppingListCheckOffService.everythingBought=function (){
      return toBuyList.length==0;
    }
    shoppingListCheckOffService.nothingBought=function (){
      return alreadyBoughtList.length==0;
    }

    shoppingListCheckOffService.bought=function (index){
      alreadyBoughtList.push(toBuyList.splice(index,1)[0]);
    }
    shoppingListCheckOffService.getToBuy= function (){
      return toBuyList;
    }
    shoppingListCheckOffService.getalreadyBought=function (){
      return alreadyBoughtList;
    }

  }

})();
