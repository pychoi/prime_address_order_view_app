myApp.controller('AddressDisplayController', ['$scope', '$http', function($scope, $http){
    $scope.currentName = {};
    $scope.resultsArray = [];
    $scope.addressResultsArray = [];

    //console.log("controller is working");

    $scope.getName = function(){
        //console.log("get name function is firing");
        $http.get('/name').then(function(response){
           console.log(response.data);
            $scope.resultsArray = response.data;
        });
    };


    $scope.getAddress = function(foo){
        console.log(foo);
        $http.get('/address', {params: {name: foo.name, id: foo.id}}).then(function(response){
           console.log(response.data);
            $scope.addressResultsArray = response.data;
        });
    };

    $scope.getName();



}]);