/**
 * Created by NANA on 2017/2/21.
 */

app.controller('eliteCtrl',['$scope','$state', '$http','$stateParams','jobService',
  function ($scope,$state, $http,$stateParams,jobService) {
      delete sessionStorage.companyListOptions;

      //banner读取
      jobService.getArticle(2).then(function (res) {
          if (res.data.code == 0) {
              $scope.datas = res.data.data.articleList;

          }else{
              bootbox.alert({
                  buttons: {
                      ok: {
                          label: '关闭',
                          className: 'btn-danger'
                      }
                  },
                  message: '找精英banner图：'+res.data.message,
                  title: "提示"
              });
          }
      });
      //公司logo读取
      var vm = this;
      vm.params = $state.params;
      vm.params.size = 8;
      jobService.getCompanyList(vm.params, 0).then(function (res) {
          if (res.data.code == 0) {
              $scope.findElite = res.data.data;

          }else{
              bootbox.alert({
                  buttons: {
                      ok: {
                          label: '关闭',
                          className: 'btn-danger'
                      }
                  },
                  message: '成功案例logo：'+res.data.message,
                  title: "提示"
              });
          }
      });

}]);


