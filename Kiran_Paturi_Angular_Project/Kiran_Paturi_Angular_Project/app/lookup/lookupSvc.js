/// <reference path="../bower_components/angular/angular.min.js" />

 (function(){
     function lookupSvc($http,$q){
         this.getCountries = function () {

             /*By without using $q Services */

             //return $http.get("app/api/countries.json");

             /*By without using $q Services */

/*By Using $q Services */
             var dfd = $q.defer();

             $http.get("app/api/countries.json")
             .then(function (res) {
                 dfd.resolve(res);
             })
             .catch(function (res) {
                 dfd.reject(res);
             })
             .finally(function () {
                 console.log("done");
             });

             return dfd.promise;
    /*By Using $q Services */
             
         };
        
     }
     angular.module("lookup")
     .service("lookupSvc",["$http","$q",lookupSvc])
    
 })();
