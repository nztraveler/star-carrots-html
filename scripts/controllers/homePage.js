/**
 * Created by NANA on 2017/2/21.
 */



//伙伴之言轮播图


//开始获取首页banner图和最新职位数据

app.controller('homeCtrl',['$scope','$state', '$http','$stateParams','$rootScope','jobService',
    function ($scope,$state, $http,$stateParams,$rootScope,jobService) {
        $rootScope.$state = $state;
        //读取首页banner
        jobService.getArticle(0).then(function (res) {
            if (res.data.code == 0) {
                $scope.datas = res.data.data.articleList;

            }

                var bannerArrs = [];
                for (i = 0; i < 2; i++) {
                    bannerArrs[i] = $scope.datas.slice(0, 1);
                    $scope.datas.splice(0, 1)
                }
                console.log(bannerArrs);

                $scope.SearchBanner=bannerArrs
            });
        // $http.get("/carrots-ajax/a/profession/search?size=20")
        //     .success(function(response){
        //         $scope.newPost =response.data;
        //         console.log(response.data);
        //读取最新职位并拆分
        var vm = this;
        vm.params = $state.params;
        vm.params.size = 20;
        jobService.getSearchJob(vm.params).then(function (res) {
            if (res.data.code == 0) {
                $scope.newPost =res.data.data;
            }



                var bannerArr = [];
                for (i = 0; i < 5; i++) {
                    bannerArr[i] = $scope.newPost.slice(0, 4);
                    $scope.newPost.splice(0, 4)
                }
                console.log(bannerArr);

                $scope.SearchJobList=bannerArr;

                $('.carousel').carousel({
                    interval: 3000
                })
            });




    }]);












// app.controller('homeCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'commonUtil',
//     function ($scope, $rootScope, $state, jobService, commonUtil) {
//         var vm = this;
//         vm.params = $state.params;

//         //读取轮播图数据
//         jobService.getArticle(0).then(function (res) {
//             if (res.data.code == 0) {
//                 vm.homeArticle = res.data;
//                 //轮播图3s
//                 // carouselConfig(3000);
//             }
//         });
//         //读取最新职位并拆分
//         jobService.getSearchJob(vm.params).then(function (res) {
//             if (res.data.code == 0) {
//                 if (res.data.data.length !== 0) {
//                     vm.SearchJobList = commonUtil.newJobRule(res.data.data);
//                     // 轮播图3s
//                     carouselConfig(3000);
//                 }
//             }
//         });
//     }]);
    
