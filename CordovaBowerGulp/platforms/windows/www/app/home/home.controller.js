/// <reference path="../_references.js" />
(function () {
    'use strict';

    angular
    .module('app')
    .controller('HomeController', HomeController);

    HomeController.$inject = ['$log', 'Azureservice'];

    function HomeController($log, Azureservice) {
        
        document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

        var vm = this;
    
        function onDeviceReady() {
            refreshAuthDisplay();
            $("#logged-out button").click(logIn);
            $("#logged-in button").click(logOut);
        }

        function refreshAuthDisplay() {
            var isLoggedIn = Azureservice.getCurrentUser() !== null;
            $("#logged-in").toggle(isLoggedIn);
            $("#logged-out").toggle(!isLoggedIn);
        }

        function logIn() {
            Azureservice.login("facebook").then(refreshAuthDisplay, function (error) {
                navigator.notification.alert("Error: " + error);
            });
        }

        function logOut() {
            AzureService.logout();
            refreshAuthDisplay();
        }

    }
})();