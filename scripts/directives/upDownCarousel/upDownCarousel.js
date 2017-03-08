/**
 * Created by Administrator on 2016/9/3.
 */
app.directive('upcarousel', function () {
    return {
        templateUrl: "scripts/directives/upDownCarousel/upDownCarousel.html",
        restrict: "EA",
        link: function () {
            $('.carousel').carousel({
                interval: 3000
            });
        }
    }
});