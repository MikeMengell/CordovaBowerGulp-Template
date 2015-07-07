(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'restangular',
        'autocomplete',
        'ngCordova',
        'azure-mobile-service.module'
    ]).value('$', $);
})();