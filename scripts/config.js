'use strict';
 angular.module("luoboduoApp", ["ui.router", "oc.lazyLoad"])
     .config(httpConfig)
     .config(projectRouteConfig)
     .run(['$rootScope',
         function ($rootScope) {
             $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                 //默认分页参数
                 if (toParams.page != undefined) {
                     toParams.page = toParams.page || 1;
                 }
                 if (toParams.size != undefined) {
                     toParams.size = toParams.size || 10;
                 }
             });

             $rootScope.$on('$viewContentLoading', function (event) {
                 console.log('视图开始加载');
             });
             $rootScope.$on('$viewContentLoaded', function (event) {
                 console.log('视图渲染完毕');
             });
         }]);


function httpConfig($httpProvider) {
    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
}

