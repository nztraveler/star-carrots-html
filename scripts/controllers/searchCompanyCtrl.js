'use strict';
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('searchCompanyCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'searchOptions', 'searchUtil', 'commonUtil',
    function ($scope, $rootScope, $state, jobService, searchOptions, searchUtil, commonUtil) {
        var vm = this;

        // 读取本地记录
        vm.option = commonUtil.judegesessionStorage(sessionStorage.searchCompanyOptions, searchOptions);
        // 获取选中的值
        vm.data = searchUtil.dataConvert(vm.option);

        // 拼凑字段
        vm.data.name = $state.params.name;
        vm.data.size = 9;
        vm.data.page = $state.params.page;

        //标签多选
        vm.checkboxMulti = searchUtil.checkboxMulti;

        //搜索
        vm.search = function () {
            // 将数据存入本地
            sessionStorage.searchCompanyOptions = JSON.stringify(vm.option);
            // 刷新
            $state.go($state.current, {page: 1, size: 9, name: vm.data.name}, {reload: true});
        };

        //清除
        vm.clear = function () {
            sessionStorage.removeItem("searchCompanyOptions");
            sessionStorage.searchCompanyOptions = JSON.stringify(searchOptions);

            $state.go($state.current, {page: 1, size: 9, name: null}, {reload: true});
        };

        //读取公司
        jobService.getCompanyList(vm.data).then(function (res) {
            if (res.data.code === 0) {
                vm.companyList = res.data;
            }else{
                console.warn("公司搜索的数据信息读取失败");
            }
            // 判断找不到页面或找不到内容
            vm.isNotFind = commonUtil.judgeNotFind(res.data);
            // 找不到内容时，是否推荐
            vm.isShowRecommend = "company"
        });
    }]);