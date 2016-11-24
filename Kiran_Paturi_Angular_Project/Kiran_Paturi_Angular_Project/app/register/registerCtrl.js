/// <reference path="../bower_components/angular/angular.min.js" />
(

function () {

    function registerCtrl() {
        this.countries = [
            { "name": "India", "code": "IN" },
            {"name":"United State of America","code":"US"}
        ];

        this.userDetails = {};
        this.register = function () {
            console.log(this.userDetails);
        }


    }

    angular.module("register")
    .controller("registerCtrl", [registerCtrl])

}
    
)();