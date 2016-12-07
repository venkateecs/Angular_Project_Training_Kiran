/// <reference path="../bower_components/angular/angular.min.js" />
(

function () {

    function productSvc($http,$q) {
        this.searchProducts = function (parameter) {
            var url = "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=jeans";

            var dfd = $q.defer();
            $http.get("/WM")
            .then(function (res) {
                dfd.resolve(res);
            })
            .catch(function (res) {
                dfd.reject(res);
            });
            return dfd.promise;

        }
    }

    angular.module("product")
    .service("productSvc", ["$http","$q",productSvc])

}
    
)();