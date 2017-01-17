(function () {
    "use strict";

    angular.module("questionYourself")
        .controller("MicrosoftController", MicrosoftController);

    MicrosoftController.$inject = ['$scope', '$state', 'router', 'microsoftService'];
    function MicrosoftController($scope, $state, router, microsoftService) {
        var vm = this;
        
        angular.extend(vm, {
            stateNames: microsoftService.stateNames
        });
        // ToDo: this method shall be tested later.
        //router.setUpRoutes();
    }
})();