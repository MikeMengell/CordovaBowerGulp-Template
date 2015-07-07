/// <reference path="../_references.js" />
(function () {
    'use strict';

    angular
    .module('app')
    .controller('ContactController', ContactController);

    ContactController.$inject = ['$log'];

    function ContactController($log) {
        var vm = this; //eslint-disable-line no-unused-vars

        $log.info('Contact Controller Loaded');

        document.addEventListener('deviceready', onDeviceReady.bind(this), false);

        function onDeviceReady() {
            //Cordova specific code
        }
    }
})();
