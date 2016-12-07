/// <reference path="../bower_components/angular/angular.min.js" />
(
 
    function () {

        function productCtrl($scope, productSvc) {

            $scope.message = "Hello Venkata Ramana";

            productSvc.searchProducts("ipod")
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (response) {
                    console.log(response);
                });

        }
        
        angular.module("product")
        .controller("productCtrl", ["$scope", "productSvc", productCtrl]);

    }
    
 )();

