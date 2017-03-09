'use strict';
app.controller('notFindCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {
        var vm = this;
        vm.params = $state.params;
        vm.params.size = 3;
        //读取公司
        jobService.getCompanyList(vm.params).then(function (res) {
            if (res.data.code == 0) {
                vm.eliteCompany = res.data;
            }else {
                bootbox.alert({
                    buttons: {
                        ok: {
                            label: '关闭',
                            className: 'btn-danger'
                        }
                    },
                    message: 'notFind：'+res.data.message,
                    title: "提示"
                });
            }

        });
    }]);