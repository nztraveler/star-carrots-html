var myApp=angular.module("luoboduoApp",[]);
// 导航轮播
// myApp.directive('navCarousel', function (requestData) {
//         return {
//             restrict: 'E',
//             templateUrl: 'template/navCarousel.html',
//             scope: {},
//             replace: 'true',
//             link: function (scope, ele, attrs) {
//                 scope.Interval = attrs.interval;
//                 scope.noWrapSlides = false;
//                 scope.active = 0;
//                 scope.slides = [];
//                 requestData.articleList({type: 1}).success(function (res) {
//                     scope.slides = res.data.articleList
//                 });
//             }
//         }
//     })
//     //找工作面板
//     .directive('searchPanel', function ($timeout) {
//         return {
//             restrict: 'E',
//             templateUrl: 'template/searchPanel.html',
//             scope: {},
//             replace: 'true',
//             link: function (scope, ele, attrs) {
//                 scope.panel = [
//                     {
//                         'class': '产品类',
//                         'data': [{
//                             name: "产品", category: 1,
//                             data: [{type: '', name: '不限', choose: true},
//                                 {type: 1, name: '助理', choose: false},
//                                 {type: 2, name: '初级', choose: false},
//                                 {type: 3, name: '中级', choose: false},
//                                 {type: 4, name: '高级', choose: false},
//                                 {type: 5, name: '总监', choose: false}]
//                         },
//                             {
//                                 name: "UI", category: 2,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false},
//                                     {type: 4, name: '总监', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "QA", category: 3,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             }]


//                     }, {
//                         'class': '技术类',
//                         'data': [
//                             {
//                                 name: "Android", category: 4,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "IOS", category: 5,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "WEB", category: 6,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "OP", category: 7,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "Java", category: 8,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false},
//                                     {type: 4, name: '总监', choose: false}
//                                 ]
//                             }


//                         ]
//                     }, {
//                         'class': '大数据',
//                         'data': [
//                             {
//                                 name: "NLP", category: 9,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "DM", category: 10,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             },
//                             {
//                                 name: "DL", category: 11,
//                                 data: [{type: '', name: '不限', choose: true},
//                                     {type: 1, name: '初级', choose: false},
//                                     {type: 2, name: '中级', choose: false},
//                                     {type: 3, name: '高级', choose: false}
//                                 ]
//                             }
//                         ]
//                     }];
//                 //等待DOM加载
//                 $timeout(function () {
//                     scope.test = function () {
//                         $('.nav_job_item').hover(
//                             function () {
//                                 $(this).children('.nav_detail').css('display', 'block')
//                             },
//                             function () {
//                                 $(this).children('.nav_detail').css('display', 'none')
//                             }
//                         )
//                     }
//                     scope.test();
//                 }, 0)

//             }

//         }
//     })
//notFind页面
myApp.directive('notFind', function ($state, jobService) {
    return {
        restrict: 'EA',
        templateUrl: 'views/template/notFind/notFind.html',
        replace: true,
        // scope: {
        //     size: '@',
        //     showrecommend: '@'
        // },
        // link: function (scope, element, attrs) {
        //     var data = {};
        //     data.size = scope.size;

        //     //获取推荐数据
        //     if (scope.showrecommend == "company") {
        //         jobService.getCompanyList(data).then(function (res) {
        //             if (res.data.code == 0) {
        //                 scope.company = res.data;
        //             }
        //         });
        //     } else if (scope.showrecommend == "position") {
        //         jobService.getSearchJob(data).then(function (res) {
        //             if (res.data.code == 0) {
        //                 scope.job = res.data;
        //             }
        //         });
        //     }

        // }
    }


});