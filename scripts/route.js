'use strict';
function projectRouteConfig($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,$locationProvider) {
    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $ocLazyLoadProvider.config({
        debug: false,
        events: true
    });

    //更改url格式配置为html5，去掉#号
    $locationProvider.html5Mode(true);

    // $urlRouterProvider.when("", "/homePage");//旧版本写法
    $urlRouterProvider.otherwise('/homePage');  //新版本写法

    $stateProvider
        .state('field', {
            url: '',
            templateUrl: 'views/main.html',
            abstract: true, // true 表明此状态不能被显性激活，只能被子状态隐性激活
            resolve: {
                loadMyFile: _lazyLoad([
                    'styles/index.css',
                ])
            }
        })
        .state("field.homePage", {
            url: "/homePage",
            templateUrl: "views/homePage.html",
            controller:"homeCtrl",
            resolve: {
                loadMyFile:_lazyLoad([
                    'styles/homePage.css',
                    'scripts/controllers/homePage.js',
                    'jqcarouse',

                ])
            }
        })
        .state("field.elite", {
            url: "/elite",
            templateUrl: "views/elite.html",
            controller:"eliteCtrl",
            controlleAs:"vm",
            resolve: {
                loadMyFile:_lazyLoad([
                    'scripts/controllers/elite.js',
                    'styles/elite.css'
                ])
            }
        })

        .state("field.about", {
            url: "/about?status",
            templateUrl: "views/about.html",
            resolve: {
                loadMyFile:_lazyLoad([
                    'scripts/controllers/about.js',
                    'styles/about.css'
                ])
            }
        })
        //找工作
        .state("field.findJob", {
            url: "/findJob",
            templateUrl: "views/findJob.html",
            controller: 'findJobCtrl as vm',
            resolve: {
                loadMyFile:_lazyLoad([
                    'scripts/controllers/findJob.js',
                    'styles/findJob.css'
                ])
            }
        })
        .state("field.searchMain", {
            url: "/search",
            templateUrl: "views/searchMain.html",
            resolve: {
                loadMyFile:_lazyLoad([
                    'scripts/controllers/search.js',
                    'styles/search.css'
                ])
            }
        })
        .state("field.searchMain.searchCompany", {
            url: "/searchCompany",
            templateUrl: "views/searchCompany.html"
        })





}
