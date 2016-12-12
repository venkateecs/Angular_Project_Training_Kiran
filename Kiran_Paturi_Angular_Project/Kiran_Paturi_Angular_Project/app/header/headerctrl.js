/// <reference path="../bower_components/angular/angular.min.js" />
(
    function () {
        /*controller syntax
        1. controller function will take two params
          controller Name
          callbackFunction
        */
        function headerCtrlFn($scope) {
            $scope.brandName = "Blogger.io Venkat Ramana";
            $scope.navItems = ["Home", "Product", "Register", "Login", "Users"];

           /* $scope.productCount = 0;
            $rootScope.$on("PRODUCT-ADDED", function (evet, args) {
                $scope.productCount++;
            });*/

        }

        angular.module("header")
        .controller("headerCtrl", ["$scope", headerCtrlFn]);


})();

