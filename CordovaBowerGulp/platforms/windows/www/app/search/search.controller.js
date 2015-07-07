/// <reference path="../_references.js" />
(function () {
    'use strict';

    angular
    .module('app')
    .controller('SearchController', SearchController);

    SearchController.$inject = ['$log', 'CitiesService'];

    function SearchController($log, CitiesService) {

        var vm = this;

        vm.cities = CitiesService.getCities();

    }
})();