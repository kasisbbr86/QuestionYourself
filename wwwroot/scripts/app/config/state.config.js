(function () {
    "use strict";
    // variables used locally, withing this javascript file local scope.
    var $stateProviderRef = null;
    var $urlRouterProviderRef = null;

    angular.module("questionYourself")
        .config(questionYourselfConfig)
        .run(questionYourselfConfigRun);

    questionYourselfConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'routerProvider'];
    function questionYourselfConfig($stateProvider, $urlRouterProvider, $locationProvider, routerProvider) {

        $stateProvider
            .state('settings', {
                url: '/',
                abstract:true,
                template: '<ui-view/>'
            })
            .state('settings.home', {
                url: 'home',
                templateUrl: '../../../views/Home.html'
            })
            .state('settings.microsoft', {
                url: 'microsoft/:techname',
                templateUrl: function(MicrosoftTechnology) { // providers can be specified here.
                    // ToDo: return the technology specific html page here.
                    return '../../../views/MicrosoftStack.html';
                },
                controller: 'MicrosoftController',
                controllerAs: 'ms',
                resolve: { // state specific providers
                    MicrosoftTechnology: ['$stateParams', function($stateParams) { // providers
                        // ToDo: add all the states based on the technology selected here.
                        return $stateParams.techname;
                    }]
                }
            })
            .state('settings.contactus', {
                url: 'contactus',
                views: {
                '': {
                    templateUrl: '../../../views/ContactUs.html',
                },
                'query@settings.contactus': { //viewName@stateName
                    template: 'Any Queries or Suggestions, write to <u>kasisbbr86@gmail.com</u>.' 
                },
                'info@settings.contactus': { 
                    templateUrl: '../../../views/ContactUs-Info.html'
                    //controller: 'ContactusController'
                }
            }
            });

        // ToDo: this method shall be tested later.
        //routerProvider.setCollectionUrl('wwwroot/scripts/app/config/states.json');

        $urlRouterProvider.otherwise('/home');

        $locationProvider.html5Mode({
            enabled: false
        });

        $stateProviderRef = $stateProvider;
        $urlRouterProviderRef = $urlRouterProvider;
    }

    // http://stackoverflow.com/questions/24727042/angularjs-ui-router-how-to-configure-dynamic-views
    questionYourselfConfigRun.$inject = ['$q', '$rootScope', '$http', '$state'];
    function questionYourselfConfigRun($q, $rootScope, $http, $state) {
        //var $state = $rootScope.$state;
        $http
        .get("wwwroot/scripts/app/config/states.json")
        .then(function(collection) {
            angular.forEach(collection.data, function(stateValue, key) {
                var getExistingState = $state.get(stateValue.name)
                if(getExistingState !== null){
                    return; 
                }
                var state = {
                    "url": stateValue.url,
                    "parent": stateValue.parent,
                    "abstract": stateValue.abstract,
                    "views": {}
                };
                angular.forEach(stateValue.views, function(view) {
                    state.views[view.name] = {
                        templateUrl: view.templateUrl,
                    };
                });
                $stateProviderRef.state(stateValue.name, state);
            });
     
            // Configures $urlRouter's listener *after* your custom listener
            // $urlRouter.sync();
            // $urlRouter.listen();    
      });
    }
})();