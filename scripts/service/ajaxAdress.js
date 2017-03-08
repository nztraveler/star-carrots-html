app.factory('path', function($http, $state) {
        return {
            //轮播article
            article_url: function(type) {
                return "/carrots-ajax/a/article/search?type=" + type
            },
            //找职位分类
            jobList_url: function() {
                return "../service/jobList.json"
            },
            //公司列表
            companyList_url: function(type) {
                return "/carrots-ajax/a/company/search?returnPage=" + type
            },
            //搜索职位
            searchJob_url: function(type) {
                return " /carrots-ajax/a/profession/search?recommend=" + type
            },
            //职位详情
            jobDescription_url: function(id) {
                return "/carrots-ajax/a/profession/" + id
            },
            //公司详情
            companyDescription_url: function(id) {
                return "/carrots-ajax/a/company/" + id
            }
        }
    });
