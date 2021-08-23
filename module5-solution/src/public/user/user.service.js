(function () {
    "use strict";
    
    angular.module('public')
    .service('UserService', UserService);


    function UserService(){
        var userService=this;
        userService.setData= function(user){
             userService.user=user;
        }
        userService.getData= function(){
            return userService.user;
        }
    }
}())   