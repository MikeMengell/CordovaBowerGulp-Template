(function () {
    'use strict';

    angular
        .module('app')
        .config(configure)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });

    configure.$inject =
        ['$stateProvider', '$urlRouterProvider', 'RestangularProvider'];
    
    function configure($stateProvider, $urlRouterProvider, RestangularProvider) {

        RestangularProvider.setBaseUrl('/api/');

        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "app/home/home.html",
                data: { pageTitle: 'Home' }
            })
            .state('about', {
                url: "/about",
                templateUrl: "app/about/about.html",
                data: { pageTitle: 'About' }
            })
            .state('search', {
                url: "/search",
                templateUrl: "app/search/search.html",
                data: { pageTitle: 'Search' }
            });
    }
})();