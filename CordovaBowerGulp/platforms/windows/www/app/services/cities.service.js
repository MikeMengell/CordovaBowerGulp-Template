(function () {
    'use strict';

    angular
        .module('app')
        .factory('CitiesService', CitiesService);

    CitiesService.$inject = ['$log'];

    function CitiesService($log) {
        return {
            getCities: getCities
        };

        function getCities() {
            //Easiest way to get a static list of cities into the application.
            //Ripple doesn't support File plugin so it's cumbersome to dev against it.
            return ["London", "Manchester", "Edinburgh"];
        }
    }
})();