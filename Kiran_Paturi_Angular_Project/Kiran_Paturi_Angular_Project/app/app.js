/// <reference path="../bower_components/angular/angular.min.js" />
(
   function () {
       /*Module Creation*/
       angular.module("BlogFace", ["header"]);

       /*Module Consumption*/

       angular.module("BlogFace")
       .config([function () {

           console.log("Blog Face Module");

       }])

       .run([function () {
           console.log("Blog Run function");
           
       }]);

       /*we are extending the functionality of the config by declaring*/

       /* if a config is declared the below functions can be used.
        run,controller,service,factory,directive,provider,constant,value,component
       */
   }
)();