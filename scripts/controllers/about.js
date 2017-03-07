/**
 * Created by NANA on 2017/2/21.
 */
var luoboduoApp =angular.module('luoboduoApp',[]);
luoboduoApp.controller('aboutCtrl', ['$scope','$state', '$http','$stateParams',
    function ($scope,$state, $http,$stateParams) {
        var vm = this;
        

        vm.toggle = $state.params.status !== "false";

        if ($state.params.status === "false" || undefined) {
            $('.table-phone').tab('show');
        } else {
            $('table-people').tab('show');
        }
    }
]);
