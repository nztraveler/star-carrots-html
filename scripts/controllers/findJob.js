angular.module("luoboduoApp").controller('findJobCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {
        var vm = this;
        vm.params=$state.params;
        vm.params.size = 8;
        //获取职业分类数据
        jobService.professionSort().then(function(res){
            if(res.data.code==0){
                vm.professionSort=res.data;
            }
        });
        //最新职位、推荐职位切换
        $scope.exchangeJob=function(isChoose){
            if(isChoose==undefined||isChoose==false){
                vm.isChoose=!vm.isChoose;
            }
        }
        //获取最新职位数据
        jobService.professionList(vm.params,1).then(function(res){
                if(res.data.code==0){
                    vm.newJobList = res.data;
                }
            }
        );
        // 获取推荐职位数据
        jobService.professionList(vm.params).then(function (res) {
            if (res.data.code == 0) {
                vm.recommendJobList = res.data;
            }

        });
    }]);
