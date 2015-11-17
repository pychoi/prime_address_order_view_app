myApp.controller('OrderLookupController', ['$scope', '$http', function($scope, $http){
    $scope.currentName = {};
    $scope.resultsArray = [];
    $scope.endDate;
    $scope.startDate;
    $scope.ordersResultsArray = [];
    $scope.totalAmount = 0;
    $scope.predicate = false;

    //console.log("controller is working");

    $scope.getName = function(){
        //console.log("get name function is firing");
        $http.get('/name').then(function(response){
            console.log(response.data);
            $scope.resultsArray = response.data;
        });
    };

    $scope.getOrders = function(startDate,endDate,id){
        //console.log(currentName);
        $http.get('/orders', {params: {start: startDate, end: endDate, id: id}}).then(function(response){
            console.log(response.data);
            $scope.ordersResultsArray = response.data;
            //console.log($scope.ordersResultsArray[0].amount);

            for(var i=0; i<$scope.ordersResultsArray.length; i++){
                //console.log($scope.ordersResultsArray[i].amount);
                $scope.totalAmount += Number($scope.ordersResultsArray[i].amount);
            };

            $scope.predicate = true;

            });

    };

    //$scope.getAddress = function(foo){
    //    console.log(foo);
    //    $http.get('/address', {params: {name: foo.name, id: foo.id}}).then(function(response){
    //        console.log(response.data);
    //        $scope.addressResultsArray = response.data;
    //    });
    //};

    $scope.getName();

}]);