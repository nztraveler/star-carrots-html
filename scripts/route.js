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
            // controller:'mainCtrl',
            // controllerAs: 'vm',
            abstract: true, // true 表明此状态不能被显性激活，只能被子状态隐性激活
            resolve: {
                loadMyFile: _lazyLoad([
                    'styles/main.css',
                    // 'scripts/controllers/mainCtrl.js',
                    'scripts/directives/fsp-paging/pagination.js',
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
            controller: 'aboutCtrl',
            controllerAs:"vm",
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
            controller: 'findJobCtrl',
            controllerAs:"vm",
            resolve: {
                loadMyFile:_lazyLoad([
                    'scripts/controllers/findJob.js',
                    'styles/findJob.css',
                    'scripts/directives/upDownCarousel/upDownCarousel.css',
                    'scripts/directives/upDownCarousel/upDownCarousel.js'
                ])
            }
        })

        //搜索(顶部边栏页面)
        .state('field.searchMain', {
            url: '/searchMain?id',
            title: '搜索侧边栏',
            templateUrl: 'views/searchMain.html',
            //controller: 'searchMainCtrl',
            //controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    //'js/controllers/findJob/searchMainCtrl.js',
                    'styles/searchMain.css'
                ])
            }
        })

        //搜索职位
        .state('field.searchMain.searchJob', {
            url: '/searchJob?page&size&type&subType&name',
            title: '搜索职位',
            templateUrl: 'views/searchJob.html',
            controller: 'searchJobCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'styles/searchJob.css',
                    'scripts/controllers/searchJobCtrl.js',
                    'notFind'
                ])
            }
        })
        //搜索公司
        .state('field.searchMain.searchCompany', {
            url: 'searchCompany?page&size&name',
            title: '搜索公司',
            templateUrl: 'views/searchCompany.html',
            controller: 'searchCompanyCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'scripts/controllers/searchCompanyCtrl.js',
                    'notFind'
                ])
            }
        })
        // 职位详情
        .state("field.jobDescription", {
            url: "/jobDescription?id",
            templateUrl: "views/jobDescription.html",
            controller:"jobDescriptionCtrl",
            controllerAs:"vm",
            resolve: {
                loadMyFile:_lazyLoad([
                    'scripts/controllers/jobDescription.js',
                    'styles/jobDescription.css'
                ])
            }
        })

        //公共部分
        .state('field.companyMain', {
            url: '/companyMain?page&size&id&companyId',
            title: '在招职位',
            templateUrl: 'views/companyDetails/companyMain.html',
            controller: 'companyHomeCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'scripts/controllers/companyDetails/companyHomeCtrl.js',
                    'styles/companyDetails/companyMain.css'
                ])
            }
        })

        //公司页面主页
        .state('field.companyMain.companyHome', {
            url: '/companyHome?page&size&id',
            title: '公司主页',
            templateUrl: 'views/companyDetails/companyHome.html',
            controller: 'companyHomeCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'scripts/controllers/companyDetails/companyHomeCtrl.js',
                    'styles/companyDetails/companyHome.css',
                ])
            }
        })
        //在招职位页面
        .state('field.companyMain.hiringJobs', {
            url: '/hiringJobs?page&size',
            title: '在招职位',
            templateUrl: 'views/companyDetails/hiringJobs.html',
            controller: 'hiringJobsCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    // 'scripts/controllers/companyDetails/companyHomeCtrl.js',
                    'scripts/controllers/companyDetails/hiringJobsCtrl.js',
                    'styles/companyDetails/hiringJobs.css',
                    'styles/companyDetails/companyHome.css',
                    // 'scripts/directives/fsp-paging/pagination.js',
                    'notFind'
                ])
            }
        })
        //公司列表页
        .state('field.companyList', {
            url: '/companyList?page&size',
            title: '公司列表页',
            templateUrl: 'views/companyList.html',
            controller: 'companyListCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'scripts/controllers/companyListCtrl.js',
                    'notFind'
                ])
            }
        })
        //最新、推荐职位
        .state('field.jobList', {
            url: '/jobList?n&page&size&name',
            title: '职业推荐',
            templateUrl: 'views/jobList.html',
            controller: 'jobListCtrl',
            controllerAs: 'vm',
            cache: false,
            resolve: {
                loadMyFile: _lazyLoad([
                    'scripts/controllers/jobListCtrl.js',
                    'styles/jobList.css',
                    'notFind'
                ])
            }
        })



}
