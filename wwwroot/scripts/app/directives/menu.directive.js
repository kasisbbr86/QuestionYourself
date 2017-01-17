(function () {
    "use strict";

    angular.module("questionYourself")
        .directive('navigationMenu', navigationMenu);

    function navigationMenu() {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment  
            templateUrl: '../../../views/Common/navigationMenu.html',
            controller: navigationMenuController, //Embed a custom controller in the directive
            link: function ($scope, element, attrs) { 
                var sampleContent = '';
            } //DOM manipulation
        };
    }

    navigationMenuController.$inject = ['$scope'];
    function navigationMenuController($scope) {
        var vm = this;
    }
})();