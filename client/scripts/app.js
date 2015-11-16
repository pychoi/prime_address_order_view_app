var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/address_display', {
            templateUrl: "assets/views/routes/address_display.html",
            controller: "AddressDisplayController"
        }).
        when('/order_lookup', {
            templateUrl: "assets/views/routes/order_lookup.html",
            controller: "OrderLookupController"
        }).
        otherwise({
            redirectTo: 'address_display'
        })
}]);