'use strict';
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('companyListCtrl', ['$scope', '$rootScope', '$state', 'jobService', 'searchOptions', 'searchUtil', 'commonUtil',
    function ($scope, $rootScope, $state, jobService, searchOptions, searchUtil, commonUtil) {
        var vm = this;
        // 取值
        vm.option = commonUtil.judegesessionStorage(sessionStorage.companyListOptions, searchOptions);
        //标签多选
        vm.checkboxMulti = function (index, arry) {
            searchUtil.checkboxMulti(index, arry);
            vm.search()
        };

        // 取出选中的数据
        vm.data = searchUtil.dataConvert(vm.option);
        vm.data.page = $state.params.page;
        vm.data.size = 9;

        ////搜索
        vm.search = function () {
            // 将选中的数据存储在本地
            sessionStorage.companyListOptions = JSON.stringify(vm.option);
            // 刷新当前界面
            $state.go($state.current, {page: 1, size: 9}, {reload: true});

        };

        //读取公司
        jobService.getCompanyList(vm.data).then(function (res) {
            if (res.data.code == 0) {
                vm.eliteCompany = res.data;
            }else {
                alert("公司列表信息读取失败")
            }

            // 判断找不到页面或找不到内容
            vm.isNotFind = commonUtil.judgeNotFind(res.data);
            // 找不到内容时，是否推荐
            vm.isShowRecommend = "company"
        });

    }]);