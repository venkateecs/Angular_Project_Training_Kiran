/// <reference path="../bower_components/angular/angular.min.js" />
(
   function () {

       angular.module("header", []);

       /*Module Consumption*/

       angular.module("header")
       .config([function () {

           console.log("Welcome to header");

       }])

       .run([function () {
           console.log("Header Run function");
       }]);

       /*we are extending the functionality of the config by declaring*/

       /* if a config is declared the below functions can be used.
        run,controller,service,factory,directive,provider,constant,value,component
       */

   }
)();