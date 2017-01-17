(function () {
    "use strict";

/***** This Provider is unused and instead, the state is assigned at the config's run() event. ***/    

angular.module('questionYourself')
    .provider('router', function ($stateProvider) {
        var urlCollection;
        this.$get = function ($http, $state) {
            return {
                setUpRoutes: function () {
                    $http.get(urlCollection).then(function (collection) {
                        for (var routeIndex in collection.data) {
                            if (!$state.get(collection.data[routeIndex].name)) {
                                $stateProvider.state(collection.data[routeIndex].name, collection.data[routeIndex]);
                            }
                        }
                    });
                }
            }
        };

        this.setCollectionUrl = function (url) {
            urlCollection = url;
        }
    });    
})();