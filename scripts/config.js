'use strict';
 angular.module("luoboduoApp", ["ui.router", "oc.lazyLoad"])
     .config(httpConfig)
     .config(projectRouteConfig)
     .config(lazyLoadConfig)

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
         }])
    .run(function ($rootScope, $state, $stateParams, $window) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        $rootScope.currentState = $state;
    })
});


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

function lazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'jqcarouse',
                files: [
                    'scripts/directives/jqbootstrap-carouse/jqbootstrap-carouse.css',
                    'scripts/directives/jqbootstrap-carouse/jqbootstrap-carouse.js'
                ]
            },
            {
                name: 'notFind',
                files: [
                    'scripts/directives/notFind/notFind.css',
                    'scripts/directives/notFind/notFind.js'
                ]
            },

        ]
    });
}

// function registerComponents( $provide) {
//     'use strict';
//     // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任意可以添加功能
//
//     luoboduoApp.factory = $provide.factory;
// }

// function registerComponents($controllerProvider, $compileProvider, $filterProvider, $provide) {
//     'use strict';
//     // 将Angular的组件，指令等等的注册接口挂到app对象上，可以在应用程序启动之后任意可以添加功能
//     app.controller = $controllerProvider.register;
//     app.directive = $compileProvider.directive;
//     app.filter = $filterProvider.register;
//     app.factory = $provide.factory;
//     app.service = $provide.service;
//     app.constant = $provide.constant;
//     app.value = $provide.value;
// }


function carouselConfig(time) {
    $('.carousel').carousel({
        interval: time // in milliseconds
    });
}



