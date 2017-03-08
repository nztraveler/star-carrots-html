/**
 * Created by NANA on 2017/2/21.
 */

app.controller('eliteCtrl',['$scope','$state', '$http','$stateParams',
  function ($scope,$state, $http,$stateParams) {
    $http.get("/carrots-ajax/a/article/search?type=2")
    .success(function (response) {
        $scope.datas = response.data.articleList;
        console.log(response.data);
    });
    $http.get("/carrots-ajax/a/company/search?size=8")
    .success(function (response) {
        $scope.findElite = response.data;
        console.log(response.data);
    });


}]);


