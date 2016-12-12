(
 
    function () {

        function lookupFac($http, $q) {
            return {
                getCountries: function () {
                    var dfd = $q.defer();

                    $http.get("app/api/countries.json")
                    .then(function (response) {
                        dfd.resolve(response);
                    })
                    .catch(function (err) {
                        dfd.reject(err);
                    })
                    .finally(function () {
                        console.log("Done");
                    });

                    return dfd.promise;
                }

            }

        }

        angular.module("lookup")
        .factory("lookupFac", ["$http", "$q", lookupFac])

    }
 
    
 )();