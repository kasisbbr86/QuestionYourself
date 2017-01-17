(function () {
    "use strict";

    angular.module("questionYourself")
        .factory("microsoftService", microsoftService);

    microsoftService.$inject = ['$q'];
    function microsoftService($q) {
        var stateNames = [];
        stateNames.push({stateLabel: 'C# 1.1', stateHref: 'CSharp11'});
        stateNames.push({stateLabel: 'C# 2.0', stateHref: 'CSharp2'});

        var service = {
            stateNames: stateNames
        };
        
        return service;
    }
})();