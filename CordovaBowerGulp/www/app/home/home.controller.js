/// <reference path="../_references.js" />
(function () {
    'use strict';

    angular
    .module('app')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$log'];

    function HomeController($log) {
        var vm = this; //eslint-disable-line no-unused-vars

        $log.info('Home Controller Loaded');

        document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

        function onDeviceReady() {
            //Cordova specific code
        }
    }
})();
