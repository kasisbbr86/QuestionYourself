(function () {
    "use strict";

    angular.module("questionYourself")
        .directive('homeCarousel', homeCarousel);

    function homeCarousel() {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment  
            templateUrl: '../../../views/Common/HomeCarousel.html',
            controller: homeCarouselController, //Embed a custom controller in the directive
            link: function ($scope, element, attrs) { 
                var sampleContent = '';
            } //DOM manipulation
        };
    }

    homeCarouselController.$inject = ['$scope'];
    function homeCarouselController($scope) {
        var vm = this;
    }
})();