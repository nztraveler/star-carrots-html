angular.module("luoboduoApp").controller('findJobCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {
        var vm = this;
        vm.params = $state.params;
        vm.params.size = 8;
        delete sessionStorage.searchJobOptions;


        jobService.professionList().then(function (res) {
            if (res.data.code == 0) {
                vm.list = res.data.data;
                console.log(vm.list)
            } else {

            }
        });
        // //选择菜单
        // vm.jobList = jobService.professionList().then(function (res) {
        //     vm.list = res.data.data;
        // });
        // //选择显示隐藏
        // vm.load = function () {
        //     $(".menu-box").hover(function () {
        //         $(this).children(".menu-sub").removeClass("dn");
        //     }, function () {
        //         $(this).children(".menu-sub").addClass("dn");
        //     })
        // };
        //
        // // 最新职位、推荐职位切换
        // $scope.exchangeJob = function (isChoose) {
        //     if (isChoose === undefined || isChoose === false) {
        //         vm.isChoose = !vm.isChoose;
        //     }
        // };
        //
        // //轮播图  左右的
        // jobService.getArticle(1).then(function (res) {
        //     if (res.data.code == 0) {
        //         vm.findJobArticle = res.data;
        //         //轮播图开始3s
        //         carouselConfig(3000);
        //     }
        // });
        //
        // //推荐职位
        // jobService.getSearchJob(vm.params, 1).then(function (res) {
        //     if (res.data.code == 0) {
        //         vm.recommendJobList = res.data;
        //     }
        //
        // });
        // //最新职位
        // jobService.getSearchJob(vm.params).then(function (res) {
        //     vm.newJobList = res.data;
        //     if (res.data.code == 0) {
        //     }
        //
        // });
        // //  优质公司
        // jobService.getCompanyList("", 1).then(function (res) {
        //     if (res.data.code == 0) {
        //         vm.PreeminentCompany = res.data;
        //         //普通公司
        //         vm.normalCompanyList = vm.PreeminentCompany.normalCompanyList;
        //         //推荐公司
        //         vm.approvedCompanyList = vm.PreeminentCompany.approvedCompanyList;
        //         //推荐公司轮播图开始3s
        //         carouselConfig(3000);
        //
        //         vm.industryImg = vm.PreeminentCompany.industryImg;
        //     }
        // });
    }]);
