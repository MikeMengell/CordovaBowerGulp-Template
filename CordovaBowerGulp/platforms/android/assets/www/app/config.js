(function () {
    'use strict';

    angular
        .module('app')
        .config(configure)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });

    configure.$inject =
        [ '$stateProvider', '$urlRouterProvider' ];

    function configure($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                data: { pageTitle: 'Home' }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                data: { pageTitle: 'About' }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                data: { pageTitle: 'Contact' }
            });
    }
})();
