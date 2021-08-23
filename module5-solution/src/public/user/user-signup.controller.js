(function () {
  "use strict";


angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','UserService'];

function SignUpController(MenuService,UserService) {


  var signupctrl = this;
  signupctrl.submitted=false;

  signupctrl.user=UserService.getData();
  signupctrl.badChoice=false;
  signupctrl.submit = function () {
    MenuService.getMenuItem(signupctrl.user.favdish).then(function (response){
      signupctrl.badChoice=false;
      signupctrl.user.menuItem=response;
      UserService.setData(signupctrl.user);
      signupctrl.submitted=true;

    }).catch (function (errorResponse){
      signupctrl.badChoice=true;  
    });
  };
}

})();
