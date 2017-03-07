'use strict';
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('mainCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {

        // html界面检测url中的值
        $rootScope.$state = $state;

    }]);