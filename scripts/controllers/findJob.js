angular.module("luoboduoApp").controller('findJobCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {
        var vm = this;
        vm.params=$state.params;
        vm.params.size = 8;
        delete sessionStorage.searchJobOptions;
        //获取职业分类数据
        jobService.getJobList().then(function(res){
            if(res.data.code==0){
                vm.list=res.data.data;
                console.log(vm.list);
            }else{
                alert("职业分类的数据信息读取失败");
            }
        });
        //轮播图  左右的
        jobService.getArticle(1).then(function (res) {
            if (res.data.code == 0) {
                vm.findJobArticle = res.data;
                //轮播图开始3s
                carouselConfig(3000);
            }else{
                alert("找职位左右轮播图获取失败");
            }
        });
        //获取最新职位数据
        jobService.getSearchJob(vm.params).then(function(res){
                if(res.data.code==0){
                    vm.newJobList = res.data;
                    console.log(res.data);
                }else{
                    alert("最新职位的数据信息读取失败");
                }
            }
        );
        // 获取推荐职位数据
        jobService.getSearchJob(vm.params,1).then(function (res) {
            if (res.data.code == 0) {
                vm.recommendJobList = res.data;
                console.log(res.data);
            }else{
                alert("推荐职位的数据信息读取失败");
            }

        });
        //最新职位、推荐职位切换
        $scope.exchangeJob=function(isChoose){
            if(isChoose==undefined||isChoose==false){
                vm.isChoose=!vm.isChoose;
            }
        };
        //  优质公司
        jobService.getCompanyList("", 1).then(function (res) {
            if (res.data.code == 0) {
                vm.PreeminentCompany = res.data;
                //普通公司
                vm.normalCompanyList = vm.PreeminentCompany.normalCompanyList;
                //推荐公司
                vm.approvedCompanyList = vm.PreeminentCompany.approvedCompanyList;
                //推荐公司轮播图开始3s
                // carouselConfig(3000);
                vm.industryImg = vm.PreeminentCompany.industryImg;
            }else{
                alert("优质公司的数据信息读取失败");
            }
        });
    }]);
