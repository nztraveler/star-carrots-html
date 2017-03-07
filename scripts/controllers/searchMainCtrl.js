'use strict';
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('searchMainCtrl', ['$scope', '$rootScope', '$state', 'jobService',
    function ($scope, $rootScope, $state, jobService) {
        var vm = this;
        $rootScope.$state = $state;


    }]);