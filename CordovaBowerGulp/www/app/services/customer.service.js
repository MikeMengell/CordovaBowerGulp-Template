//An example of how to call a RESTful endpoint with $resource
(function () {
    'use strict';

    angular
        .module('app')
        .factory('Customer', CustomerService);

    CustomerService.$inject = ['$resource'];

    function CustomerService($resource) {
        return {
            Customer: Customer
        };

        //From Controller
        //$scope.customer = Customer.get({ id: 123 });
        function Customer() {
            return $resource('/api/customer/:id', { id: '@id' }, {
                update: {
                    method: 'PUT'
                }
            });
        }
    }
})();
