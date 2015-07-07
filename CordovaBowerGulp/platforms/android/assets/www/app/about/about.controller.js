/// <reference path="../_references.js" />
(function () {
    'use strict';

    angular
    .module('app')
    .controller('AboutController', AboutController);

    AboutController.$inject = ['$log'];

    function AboutController($log) {
        var vm = this; //eslint-disable-line no-unused-vars

        $log.info('About Controller Loaded');

        document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

        function onDeviceReady() {
            //Cordova specific code
        }
    }
})();
