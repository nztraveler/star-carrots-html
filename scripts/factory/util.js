'use strict';
angular.module('luoboduoApp')
    .factory('commonUtil', function ($rootScope, $state, $http) {
        return {
            concactArrayParam: function (name, params) {
                var tempUrls = "?";
                angular.forEach(params, function (data, index, array) {
                    tempUrls = tempUrls + name + "=" + data + "&";
                });
                var url = tempUrls.substring(0, tempUrls.length - 1);
                //console.log("url is " + url);
                return url;
            },

            //判断obj是否为空
            checkObjIsEmpty: function (obj) {
                var hasProp = false;
                for (var prop in obj) {
                    hasProp = true;
                    break;
                }
                if (!hasProp) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    })

    .factory('clean', function () {
        return function (obj) {
            for (var x in obj) {
                angular.isArray(obj[x]) ? obj[x] = [null] : obj[x] = null;
            }
            return obj;
        }
    })
    .factory('duplicateRemoval', function () {
        return function (n, arr) {
            var inArr = false;
            arr[0] === null ? arr = [] : '';
            angular.forEach(arr, function (data, idx) {
                data === n ? remove(idx) : '';
            });
            function remove(idx) {
                arr.splice(idx, 1);
                inArr = true;
            }

            inArr ? '' : arr.push(n);
            return arr
        }
    })
    //对象属性转number
    .factory('toNum', function () {
        return function (obj) {
            if (angular.isArray(obj)) {
                var arr = [];
                angular.forEach(obj, function (data) {
                    arr.push(+data);
                    obj = arr
                })
            } else {
                /*  for (var x in obj) {
                 isNaN(+obj[x]) ? '' : obj[x] = +obj[x]
                 }*/
                angular.forEach(obj, function (data) {
                    isNaN(+data) ? '' : data = +data
                })
            }
            return obj
        }
    })
    .factory('ObjIsNull', function () {
        return function (obj) {
            var bl;
            angular.forEach(obj, function (data) {
                return data ? bl = true : bl = false;
            });
            return bl
        }
    })
    //URL存取参数
    .factory('paramster', function ($location, toNum) {
        function set(params) {
            $location.search(params)
        }

        function get(param) {
            return param ? $location.search()[param] : $location.search()
        }

        return {
            set: set,
            get: get
        }
    });