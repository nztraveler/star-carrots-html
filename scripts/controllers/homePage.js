/**
 * Created by NANA on 2017/2/21.
 */



//伙伴之言轮播图


//开始获取首页banner图和最新职位数据

var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('homeCtrl',['$scope','$state', '$http','$stateParams',
    function ($scope,$state, $http,$stateParams) {
        $http.get("/carrots-ajax/a/article/search?type=0")
            .success(function (response) {
                $scope.datas = response.data.articleList;
                console.log(response.data);

                var bannerArrs = [];
                for (i = 0; i < 2; i++) {
                    bannerArrs[i] = $scope.datas.slice(0, 1);
                    $scope.datas.splice(0, 1)
                }
                console.log(bannerArrs);

                $scope.SearchBanner=bannerArrs
            });
        $http.get("/carrots-ajax/a/profession/search?size=20")
            .success(function(response){
                $scope.newPost =response.data;
                console.log(response.data);

                var bannerArr = [];
                for (i = 0; i < 5; i++) {
                    bannerArr[i] = $scope.newPost.slice(0, 4);
                    $scope.newPost.splice(0, 4)
                }
                console.log(bannerArr);

                $scope.SearchJobList=bannerArr
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
    
