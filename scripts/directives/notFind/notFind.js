/**
 * Created by shuli on 2016/10/9.
 */
// 事例：
// <not-find ng-if="vm.isNotFind" showrecommend="{{vm.isShowRecommend}}" size="3"></not-find>
// showrecommend属性值为company显示推荐公司，为position时显示推荐职位。为null时不显示。 size属性控制推荐内容的个数。
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.directive('notFind', function ($state, jobService) {
    return {
        restrict: 'EA',
        templateUrl: 'scripts/directives/notFind/notFind.html',
        replace: true,
        scope: {
            size: '@',
            showrecommend: '@'
        },
        link: function (scope, element, attrs) {
            var data = {};
            data.size = scope.size;

            //获取推荐数据
            if (scope.showrecommend === "company") {
                jobService.getCompanyList(data).then(function (res) {
                    if (res.data.code == 0) {
                        scope.eliteCompany = res.data;
                    }
                });
            } else if (scope.showrecommend === "position") {
                jobService.getSearchJob(data).then(function (res) {
                    if (res.data.code == 0) {
                        scope.elitePosition = res.data;
                    }
                });
            }

        }
    }


});