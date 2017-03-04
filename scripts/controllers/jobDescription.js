var myApp=angular.module("luoboduoApp",[]);
myApp.controller("jobDescriptionCtrl", ["$scope", "$rootScope", "$state", "jobService", function ($scope, $rootScope, $state, jobService) {
    var vm = this;
    vm.id = $state.params.id;
    vm.companyId = $state.params.companyId;
    vm.name = $state.params.name;
    console.log("产品id为："+vm.id);
     console.log("公司id为："+vm.companyId);
      console.log("职位名称为："+vm.name);
    // 跳转本页，默认顶部
    // commonUntil.scrollTo(0, 0);
    // // 分享功能
    // vm.share = function (type) {
    //     commonUntil.shareFn(
    //         type,
    //         vm.url,
    //         vm.jobDescription.data.companyName,
    //         vm.jobDescription.data.name,
    //         vm.jobDescription.data.logo
    //     );
    // }
    // 职位详情
    jobService.professionDetail(vm.id,vm.companyId,vm.name).then(
        function (res) {
            if (res.data.code == 0) {
                vm.jobDescription = res.data.data[0];
                vm.url = "http://carrots.ptteng.com/sharing-page/sharing-page.html?id=" + vm.jobDescription.id;
                console.log(vm.jobDescription);
            } else {
                alert(res.data.message);
            }
        }
    );
}]);