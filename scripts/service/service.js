angular.module("luoboduoApp")
    .factory('jobService', function($http, path) {
        return {
            //轮播article
            getArticle: function(type) {
                return $http.get(path.article_url(type))
            },
            //找职位分类
            getJobList: function() {
                return $http.get(path.jobList_url())
            },
            //公司搜索
            getCompanyList: function(data, type) {
                return $http.get(path.companyList_url(type || ""), { params: data })
            },
            //职位搜索
            getSearchJob: function(data, type) {
                return $http.get(path.searchJob_url(type || 0), { params: data })
            },
            //职位详情
            getJobDescription: function(id) {
                return $http.get(path.jobDescription_url(id))
            },
            //公司详情
            getCompanyDescription: function(id) {
                return $http.get(path.companyDescription_url(id))
            }
        }
    });
