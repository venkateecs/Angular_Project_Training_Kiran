/// <reference path="../bower_components/angular/angular.min.js" />
(
   function () {
       /*Module Creation*/
       angular.module("BlogFace", ["header", "ui.router", "blog", "register"]);

       /*Module Consumption*/

       angular.module("BlogFace")
       .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
           /*
            blog view integration
            1.Creating the state object.
            2.registering the state object.
            3.invoking the state
           */

           var blogObj = {
               templateUrl: "app/blog/blog.html",
               controller: "blogCtrl",
               name: "Blog"
           }

           var registerObj = {
               templateUrl:"app/register/register.html",
               name: "Register",
               //url:"/Register"
               controller: "registerCtrl"
           }

           var loginObj = {
               templateUrl: "app/login/login.html",
               name: "Login"
           }

           var homeObj = {
               templateUrl: "app/home/home.html",
               name: "Home"
           };

           $stateProvider.state("Blog", blogObj);
           $stateProvider.state("Register", registerObj);
           $stateProvider.state("Login", loginObj);
           $stateProvider.state("Home", homeObj);

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