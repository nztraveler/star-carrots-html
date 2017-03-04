angular.module("luoboduoApp",[]).controller("searchMainCtrl",['$scope', '$rootScope', '$state', 'jobService',function ($scope, $rootScope, $state, jobService){
	   vm=this;
	   //切换按钮
	   $scope.btn_Toggle=function(isChoose){
            if(isChoose==undefined||isChoose==false){
                vm.isChoose=!vm.isChoose;
            }
        }
}]);