'use strict';
app.controller('jobListCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'searchOptions', 'searchUtil', 'commonUtil',
    function ($scope, $rootScope, $state, jobService, searchOptions, searchUtil, commonUtil) {
        var vm = this;
        vm.params = $state.params;

        //最新/推荐页面
        commonUtil.judegeJobList(vm);

        // 读取本地存储的记录
        vm.option = commonUtil.judegesessionStorage(sessionStorage.jobListOptions, searchOptions);

        // 选出tag标签中选中的数据
        vm.data = searchUtil.dataConvert(vm.option);


        // 拼凑字段
        vm.data.name = vm.params.name;
        vm.data.size = vm.params.size;
        vm.data.page = vm.params.page;
        vm.data.returnTags = 1;

        //标签多选
        vm.checkboxMulti = searchUtil.checkboxMulti;
        //时间单选
        vm.radioType = searchUtil.radioType;

        //搜索
        vm.search = function () {
            // 将选出的数据存入本地
            sessionStorage.jobListOptions = JSON.stringify(vm.option);
            $state.go($state.current, {page: 1, size: 10, name: vm.data.name}, {reload: true});
        };
        //清除
        vm.clear = function () {
            sessionStorage.removeItem("jobListOptions");
            sessionStorage.jobListOptions = JSON.stringify(searchOptions);

            $state.go($state.current, {page: 1, size: 10, name: null}, {reload: true});
        };

        //获取最新/推荐职位
        jobService.getSearchJob(vm.data, vm.positionType).then(function (res) {
            if (res.data.code === 0) {
                vm.jobList = res.data;
            }else{
                alert("职位搜索的数据信息读取失败");
            }

            // 判断找不到页面或找不到内容
            vm.isNotFind = commonUtil.judgeNotFind(res.data);
            // 找不到内容时，是否推荐
            vm.isShowRecommend = "position"
        });


    }]);