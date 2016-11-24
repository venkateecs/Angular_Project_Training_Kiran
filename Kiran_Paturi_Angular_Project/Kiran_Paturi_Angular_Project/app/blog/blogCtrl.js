/// <reference path="../bower_components/angular/angular.min.js" />
(
 
    function () {

        function blogCtrl($scope) {
            $scope.message = "Hello Venkata Ramana";

        }
        
        angular.module("blog")
        .controller("blogCtrl", ["$scope", blogCtrl]);

    }
    
 )();

