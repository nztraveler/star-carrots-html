/**
 * Created by NANA on 2017/2/21.
 */
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('aboutCtrl', ['$scope', '$rootScope', '$state', 'commonUtil',
    function ($scope, $rootScope, $state, commonUtil) {
        var vm = this;
        commonUtil.scrollTo(0, 0);

        vm.toggle = $state.params.status !== "false";

        if ($state.params.status === "false" || undefined) {
            $('.table-phone').tab('show');
        } else {
            $('table-people').tab('show');
        }
    }
]);
