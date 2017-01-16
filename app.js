console.log("start")
//create app
var app = angular.module("myFirstApp", [])// empty array gives us the dependencies
//create controller
app.controller("MainCtrl", ($scope)=>{
  $scope.myVariable = "priya"
  $scope.number = 8
  $scope.arrayThing = [1,2,3]
  $scope.functionThing = function (){
    console.log("hooray!!")
  }
  $scope.functionThing()
})
