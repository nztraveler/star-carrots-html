angular.module("luoboduoApp")
	 //一  banner
	.factory('bannerService', [, '$http','path', function ( $http,path) {
		return {
			//1 banner列表
			articleList: function (params) {
				return $http.get(path.articleList(), {params: params});
			}
		}
	}])
	// 二 职业
	.factory('jobService', ['$http','path', function ( $http,path) {
		return {

			//1 职位信息列表 (最新、推荐，页数，数量)
			professionList: function (params) {
				return $http.get(path.professionList(), {params: params});
			},

			//2 职业详情
			professionDetail: function (id) {
				return	$http.get(path.professionDetail())
			}

		}
	}])
	// 三 公司
	.factory('companyService', ['$q', '$http','path', function ($q, $http,path) {
		return {
			//1 公司列表
			companyList: function (params) {
				return $http.get(path.companyList(), {params: params});
			},
			//2 公司详情
			companyDetail: function (id) {
				return $http.get(path.companyDetail(id))
			}

		}
	}]);



