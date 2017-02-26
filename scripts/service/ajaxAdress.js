angular.module('luoboduoApp')
    .factory('path', ['commonUtil', function (commonUtil) {
        return {
            //一 banner
            //1 banner列表
            articleList: function () {
                return "/carrots-ajax/a/article/search";
            },

            //二 职位
            //1 职位信息列表 (最新、推荐，页数，数量)
            professionList: function () {
                return "/carrots-ajax/a/profession/search";
            },

            //2 职业详情
            professionDetail: function (id) {
                return "/carrots-ajax/a/profession/" + id;
            },

            //三 公司
            //1 公司列表
            companyList: function () {
                return "/carrots-ajax/a/company/search";
            },
            //2 公司详情
            companyDetail: function (id) {
                return "/carrots-ajax/a/company/" + id;
            }
        }

    }]);
