//An example of how to call a RESTful end point with Restangular
(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$log'];

    function dataservice($http, $log) {
        return {
            getCustomers: getCustomers
        };

        function getCustomers() {

            return $http.get('/api/customer')
                .then(getCustomersComplete, getCustomerssFailed);

            function getCustomersComplete(response) {
                $log.log("success - got data");
                $log.log(response.data);
                return response.data;
            }

            function getCustomersFailed(err) {
                $log.log(err);
            }
        }
    }
})();