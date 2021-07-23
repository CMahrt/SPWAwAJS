(function () {
'use strict';

angular
  .module('LunchCheck',[])
  .controller('Mod1Controller',Mod1Controller);

Mod1Controller.$inject = ['$scope'];
function Mod1Controller($scope){
  $scope.lunchlist="";
  $scope.checkResult="";

  $scope.checkLunchList=function (){
    $scope.checkResult="";
    var list=$scope.lunchlist.toString().split(",");
    var filterEmptyElements=function (item) {
      return item.toString().trim().length>0;
    };
    var filteredList=list.filter(filterEmptyElements);
    var lunchListLenght=filteredList.length;
    if(lunchListLenght>0){
      $scope.textcolor="green";
      if(lunchListLenght<=3){
        $scope.checkResult="Enjoy!";
      }else{
        $scope.checkResult="Too much!";
      }
    }else{
        $scope.textcolor="red";
        $scope.checkResult="Please enter data first"
    }
  }
}


})();
