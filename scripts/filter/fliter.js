angular.module("luoboduoApp")

    .filter('jobTypeFilter', function(jobType) {
        return function(type) {
            for (var i = 0; i < jobType.length; i++) {
                if (type == jobType[i].type) {
                    return jobType[i].name;
                }
            }
        }
    })
    // 职业分类
    .filter('secondTypeFilter', function(secondType) {
        return function(type) {
            for (var i = 0; i < secondType.length; i++) {
                if (type == secondType[i].type) {
                    return secondType[i].name;
                }
            }
        }
    })
    // 薪资水平
    .filter('compensationFilter', function(compensationtype) {
        return function(type) {
            for (var i = 0; i < compensationtype.length; i++) {
                if (type == compensationtype[i].type) {
                    return compensationtype[i].name;
                }
            }
        }
    })
    //  公司行业 industry
    .filter('industryFilter', function(industrytype) {
        return function(type) {
            for (var i = 0; i < industrytype.length; i++) {
                if (type == industrytype[i].type) {
                    return industrytype[i].name;
                }
            }
        }
    })
    //  工作经验 experience
    .filter('experienceFilter', function(experiencetype) {
        return function(type) {
            for (var i = 0; i < experiencetype.length; i++) {
                if (type == experiencetype[i].type) {
                    return experiencetype[i].name;
                }
            }
        }
    })
    //     学历要求 education
    .filter('educationFilter', function(educationtype) {
        return function(type) {
            for (var i = 0; i < educationtype.length; i++) {
                if (type == educationtype[i].type) {
                    return educationtype[i].name;
                }
            }
        }
    })
    //       发布时间 updateAt
    .filter('updateAtFilter', function(updateAttype, $filter) {
        return function(type) {
            var timestamp = new Date().getTime();
            timestamp = $filter('date')(timestamp, 'yyyyMMdd');
            var time = timestamp - $filter('date')(type, 'yyyyMMdd');
            if (time == 0) {
                return updateAttype[0].name + $filter('date')(type, 'HH:mm');
            } else if (time == 1) {
                return updateAttype[1].name + $filter('date')(type, 'HH:mm');
            } else {
                return $filter('date')(type, 'yyyy-MM-dd HH:mm');
            }
        }
    })
    //    融资规模 financing
    .filter('financingFilter', function(financingtype) {
        return function(type) {
            for (var i = 0; i < financingtype.length; i++) {
                if (type == financingtype[i].type) {
                    return financingtype[i].name;
                }
            }
        }
    })
    //     职位类别 category
    .filter('categoryFilter', function(categorytype) {
        return function(type) {
            for (var i = 0; i < categorytype.length; i++) {
                if (type == categorytype[i].type) {
                    return categorytype[i].name;
                }
            }
        }
    });
