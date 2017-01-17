(function () {
    "use strict";

    angular.module("questionYourself")
        .controller("MicrosoftController", MicrosoftController);

    MicrosoftController.$inject = ['$scope', '$state', 'router'];
    function MicrosoftController($scope, $state, router) {
        var vm = this;
        
        // ToDo: this method shall be tested later.
        //router.setUpRoutes();
    }
})();