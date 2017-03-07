var myApp=angular.module("luoboduoApp",[]);
// 导航轮播
myApp.directive('navCarousel', function (requestData) {
        return {
            restrict: 'E',
            templateUrl: 'template/navCarousel.html',
            scope: {},
            replace: 'true',
            link: function (scope, ele, attrs) {
                scope.Interval = attrs.interval;
                scope.noWrapSlides = false;
                scope.active = 0;
                scope.slides = [];
                requestData.articleList({type: 1}).success(function (res) {
                    scope.slides = res.data.articleList
                });
            }
        }
    })
    //伙伴之言轮播图
    .directive('partnerCarousel', function ($timeout, $interval) {
        return {
            restrict: 'E',
            templateUrl: 'template/partnerCarousel.html',
            scope: {},
            replace: 'true',
            link: function (scope) {
                scope.jsonData = [
                    {
                        'logo': '../images/xd.png',
                        'name': '北京咸蛋科技',
                        'contant': '萝卜多在技术人员的推荐成功率出奇的高，绝对值得一试！'
                    }, {
                        'logo': '../images/ms.png',
                        'name': '北京美数信息科技',
                        'contant': '萝卜多的推荐非常精准，可以很好领会用人单位对技术人员的需求，并且能够快速给到候选人。是非常好的招聘合作伙伴。'

                    }, {
                        'logo': '../images/bt.png',
                        'name': '北京贝兔科技',
                        'contant': '跟萝卜王（葡萄藤CEO李亚冲）认识很久了，对他的能力和思想都非常的认同，今年开始自己创业，也从这里请了几个萝卜共事，结果是非常满意的。支持葡萄藤，推荐萝卜多。'

                    }, {
                        'logo': '../images/kh.png',
                        'name': '中国康辉旅游社集团',
                        'contant': '“萝卜多”对应聘者和招聘公司的需求了解的非常清晰，不像平台类产品的以量取胜，而是量身定做的以质取胜。通过“萝卜多”内推的员工已成为能够独当一面的核心骨干。'

                    }, {
                        'logo': '../images/tx.png',
                        'name': '北京天晓启航',
                        'contant': '萝卜多推荐的人才质量比较高，很务实，很给力！'

                    }, {
                        'logo': '../images/tes.png',
                        'name': '北京拓尔思信息科技',
                        'contant': '萝卜多推荐的同学有一个共性就是高度的工作责任感与吃苦耐劳的结合，同时技术过硬，工作扎实、认真。来我司服务的两名同事入职以来，表现优异，都在工作中起到了关键作用。萝卜多，为你点个赞。'
                    }]
                $timeout(function () {
                    var carousels = $('#partner').carousel();
                    carousels.each(function () {
                        var $obj = $(this);
                        var $inner = $obj.find('.carousel-inner');

                        var id = 'uuid' + new Date().getTime();
                        $obj.addClass(id);

                        if ($obj.data('shift') === 1) {
                            var items = $obj.find('.item > [class*="col-"]'),
                                visibleCnt = $obj.find('.item:first [class*="col-"]').length,
                                wrapper = "";

                            // build styles
                            var rule_base = '.carousel.' + id + ' .carousel-inner > .item',
                                styles = $('<style></style>'),
                                rules = [];
                            rules[0] = rule_base + '.next {left: ' + (100 / visibleCnt) + '%; transform: none;}';
                            rules[1] = rule_base + '.active {left: 0;}';
                            rules[2] = rule_base + '.active.left {left: -' + (100 / visibleCnt) + '%; transform: none;}';
                            rules[3] = rule_base + '.next.left {left: 0;}';
                            rules[4] = rule_base + '.active.right {left: ' + (100 / visibleCnt) + '%; transform: none;}';
                            rules[5] = rule_base + '.prev.right {left: 0;}';
                            rules[6] = rule_base + '.prev {left: -' + (100 / visibleCnt) + '%; transform: none;}';
                            for (var i = 0; i < rules.length; i++) {
                                styles.append(rules[i]);
                            }
                            $obj.prepend(styles);

                            // rebuild items
                            for (var i = 0; i < $(items).length; i++) {
                                var $item = $(items[i]);
                                var parent = $item.parent();
                                if (parent.hasClass('item')) {
                                    if (!wrapper.length) {
                                        wrapper = parent.clone().removeClass('active').html('');
                                    }
                                    $item.unwrap();
                                }

                                var itemGroup = [$item];
                                for (var x = 1; x < visibleCnt; x++) {
                                    var a = i + x;
                                    var next = $(items[a]);
                                    if (!next.length) {
                                        next = $(items[(a - $(items).length)]);
                                    }
                                    itemGroup[x] = next.clone();
                                }
                                var newSet = wrapper.clone().html(itemGroup);
                                if (i == 0) {
                                    newSet.addClass('active');
                                }
                                newSet.appendTo($inner);
                            }
                        }
                    });
                })


            }
        }
    })
    //找工作面板
    .directive('searchPanel', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'template/searchPanel.html',
            scope: {},
            replace: 'true',
            link: function (scope, ele, attrs) {
                scope.panel = [
                    {
                        'class': '产品类',
                        'data': [{
                            name: "产品", category: 1,
                            data: [{type: '', name: '不限', choose: true},
                                {type: 1, name: '助理', choose: false},
                                {type: 2, name: '初级', choose: false},
                                {type: 3, name: '中级', choose: false},
                                {type: 4, name: '高级', choose: false},
                                {type: 5, name: '总监', choose: false}]
                        },
                            {
                                name: "UI", category: 2,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false},
                                    {type: 4, name: '总监', choose: false}
                                ]
                            },
                            {
                                name: "QA", category: 3,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            }]


                    }, {
                        'class': '技术类',
                        'data': [
                            {
                                name: "Android", category: 4,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            },
                            {
                                name: "IOS", category: 5,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            },
                            {
                                name: "WEB", category: 6,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            },
                            {
                                name: "OP", category: 7,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            },
                            {
                                name: "Java", category: 8,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false},
                                    {type: 4, name: '总监', choose: false}
                                ]
                            }


                        ]
                    }, {
                        'class': '大数据',
                        'data': [
                            {
                                name: "NLP", category: 9,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            },
                            {
                                name: "DM", category: 10,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            },
                            {
                                name: "DL", category: 11,
                                data: [{type: '', name: '不限', choose: true},
                                    {type: 1, name: '初级', choose: false},
                                    {type: 2, name: '中级', choose: false},
                                    {type: 3, name: '高级', choose: false}
                                ]
                            }
                        ]
                    }];
                //等待DOM加载
                $timeout(function () {
                    scope.test = function () {
                        $('.nav_job_item').hover(
                            function () {
                                $(this).children('.nav_detail').css('display', 'block')
                            },
                            function () {
                                $(this).children('.nav_detail').css('display', 'none')
                            }
                        )
                    }
                    scope.test();
                }, 0)

            }

        }
    })