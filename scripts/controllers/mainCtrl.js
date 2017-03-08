'use strict';
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('mainCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {
        var vm = this;
        // html界面检测url中的值
        $rootScope.$state = $state;
        if (document.body.clientWidth < 768) {
            vm.isToggle = "collapse";
        }
        else {
            vm.isToggle = "";
        }

    }]);