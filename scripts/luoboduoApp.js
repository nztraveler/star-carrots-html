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
});