var myApp=angular.module("luoboduoApp",[]);
myApp.controller("jobDescriptionCtrl", ["$scope", "$rootScope", "$state", "jobService", "commonUntil", function ($scope, $rootScope, $state, jobService, commonUntil) {
    var vm = this;
    vm.id = $state.params.id;
    // 跳转本页，默认顶部
    commonUntil.scrollTo(0, 0);
    // 分享功能
    vm.share = function (type) {
        commonUntil.shareFn(
            type,
            vm.url,
            vm.jobDescription.data.companyName,
            vm.jobDescription.data.name,
            vm.jobDescription.data.logo
        );
    }
    // 职位详情
    vm.jobDescription = jobService.professionDetail(vm.id).then(
        function (res) {
            if (res.data.code == 0) {
                vm.jobDescription = res.data;
                vm.url = "http://carrots.ptteng.com/sharing-page/sharing-page.html?id=" + vm.jobDescription.data.id;
            } else {
                alert(res.data.message);
            }
        }
    );
}]);