/**
 * Created by NANA on 2017/2/21.
 */



//伙伴之言轮播图


//开始获取首页banner图和最新职位数据

app.controller('homeCtrl',['$scope','$state', '$http','$stateParams','$rootScope','jobService',
    function ($scope,$state, $http,$stateParams,$rootScope,jobService) {
        delete sessionStorage.jobListOptions;
        $rootScope.$state = $state;
        //读取首页banner
        jobService.getArticle(0).then(function (res) {
            if (res.data.code == 0) {
                $scope.datas = res.data.data.articleList;

                var bannerArrs = [];
                for (i = 0; i < 2; i++) {
                    bannerArrs[i] = $scope.datas.slice(0, 1);
                    $scope.datas.splice(0, 1)
                }
                console.log(bannerArrs);

                $scope.SearchBanner=bannerArrs

            }else{
                bootbox.alert({
                    buttons: {
                        ok: {
                            label: '关闭',
                            className: 'btn-danger'
                        }
                    },
                    message: '首页banner图：'+res.data.message,
                    title: "提示"
                });
            }


            });



        //读取最新职位并拆分
        var vm = this;
        vm.params = $state.params;
        vm.params.size = 20;
        jobService.getSearchJob(vm.params).then(function (res) {
            if (res.data.code == 0) {
                $scope.newPost =res.data.data;

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
            }else{
                bootbox.alert({
                    buttons: {
                        ok: {
                            label: '关闭',
                            className: 'btn-danger'
                        }
                    },
                    message: '最新职位：'+res.data.message,
                    title: "提示"
                });
            }




            });

    }]);













    
