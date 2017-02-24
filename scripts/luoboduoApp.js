var luoboduoApp =angular.module("luoboduoApp",["ui.router","oc.lazyLoad"]);

luoboduoApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/homePage");
    $stateProvider
        .state("homePage", {
            url: "/homePage",
            templateUrl: "views/homePage.html",

            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {

                    return $ocLazyLoad.load('scripts/homePage.js','styles/homePage.css','jqcarouse');
                }]
            }
        })

        .state("elite", {
            url: "/elite",
            templateUrl: "views/elite.html",

            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {

                    return $ocLazyLoad.load('scripts/elite.js','styles/elite.css');
                }]
            }
        })

        .state("about", {
            url: "/about",
            templateUrl: "views/about.html",

            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {

                    return $ocLazyLoad.load('scripts/about.js','styles/about.css');
                }]
            }
        })
        .state("findJob", {
            url: "/findJob",
            templateUrl: "views/findJob.html",

            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {

                    return $ocLazyLoad.load('scripts/findJob.js','styles/findJob.css');
                }]
            }
        })
        .state("searchMain", {
            // url: "/search",
            templateUrl: "views/searchMain.html",

            // resolve: {
            //     loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {

            //         return $ocLazyLoad.load('scripts/search.js','styles/search.css');
            //     }]
            // }
        })
        .state("searchMain.searchCompany", {
            url: "/searchCompany",
            templateUrl: "views/searchCompany.html",
        })

});