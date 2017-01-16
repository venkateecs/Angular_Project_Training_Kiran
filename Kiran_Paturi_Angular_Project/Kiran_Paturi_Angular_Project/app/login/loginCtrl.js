/// <reference path="../bower_components/angular/angular.min.js" />
(function () {
    function loginCtrl($scope) {
       /* var vm = this;
        vm.loginDetails = {};
        vm.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        $scope.login = function () {
            console.log(vm.loginDetails);
        }*/
        $scope.loginDetails = {};
        $scope.emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        $scope.login = function () {
            console.log(vm.loginDetails);
        }

        $scope.$watch("loginDetails", function (newValue, oldValue) {
            console.log("New Value==>" + newValue);
            console.log("Old Value==>" + oldValue);
        })

        

        setTimeout(function () {
            $scope.loginDetails.email = "Kiran@gmail.com";
            $scope.$apply();
        }, 2000)


    }
    angular.module("login")
    .controller("loginCtrl", ["$scope", loginCtrl])

})();