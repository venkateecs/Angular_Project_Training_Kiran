/// <reference path="../bower_components/angular/angular.min.js" />
(
    function () {
        /*controller syntax
        1. controller function will take two params
          controller Name
          callbackFunction
        */
        function headerCtrlFn($scope) {
            $scope.brandName = "Blogger.io";
            $scope.navItems = ["Home", "Blog", "Register", "Login"];
        }

        angular.module("header")
        .controller("headerCtrl", ["$scope", headerCtrlFn]);


    })();