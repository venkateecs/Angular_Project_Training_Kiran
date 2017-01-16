/// <reference path="../bower_components/angular/angular.min.js" />
(
   function () {
       /*Module Creation*/
       angular.module("BlogFace", ["header", "ui.router", "product", "register", "login", "lookup", 'ngTouch', 'ui.grid', "components", "user", "pascalprecht.translate"]);

       /*Module Consumption*/


       angular.module("BlogFace")
       .provider("version", [function () {
           var version = "1.0.0";
           this.setVersion = function (data) {
               version = data;
           };
           this.$get = function () {
               return version;
           }
       }])

       angular.module("BlogFace")
       .config(["$stateProvider", "$urlRouterProvider", "$translateProvider", "versionProvider", function ($stateProvider, $urlRouterProvider, $translateProvider, versionProvider) {
           /*
            blog view integration
            1.Creating the state object.
            2.registering the state object.
            3.invoking the state
           */

           console.log("Old Value==>"+versionProvider.$get());
           //console.log(versionProvider.setVersion("2.2.5"));
           console.log("New Value ===>"+versionProvider.$get());

           $translateProvider.translations("en", {
               "Home": "HOME",
               "Product": "PRODUCT",
               "Register": "REGISTER",
               "Login": "LOGIN",
               "Users": "USERS"
           });
           $translateProvider.translations("de", {
               "Home": "Zuhause",
               "Product": "PRODUKT",
               "Register": "Neu registrieren",
               "Login": "Anmeldung",
               "Users": "Benutzer"               

           });

           var productObj = {
               templateUrl: "app/products/product.html",
               controller: "productCtrl",
               name: "Product"
           };

           var registerObj = {
               templateUrl:"app/register/register.html",
               name: "Register",
               //url:"/Register"
               controller: "registerCtrl"
           }

           var loginObj = {
               templateUrl: "app/login/login.html",
               name: "Login",
               controller: "loginCtrl",
               controllerAs:"lc"
           }

           var homeObj = {
               templateUrl: "app/home/home.html",
               name: "Home"
           };

           var userObj = {
               templateUrl: "app/users/user.html",
               name: "Users",
               controller: "userCtrl"
           };

           $stateProvider.state("Product", productObj);
           $stateProvider.state("Register", registerObj);
           $stateProvider.state("Login", loginObj);
           $stateProvider.state("Home", homeObj);
           $stateProvider.state("Users", userObj);

           console.log("Blog Face Module");

           $translateProvider.preferredLanguage('en');

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