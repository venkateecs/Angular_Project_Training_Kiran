/// <reference path="../bower_components/angular/angular.min.js" />
(

function () {

    function registerCtrl(registerSvc, lookupSvc) {
        var vm = this;

        vm.userDetails = {};

        vm.register = function () {
            registerSvc.registerUser(vm.userDetails);
        }

        lookupSvc.getCountries()
        .then(function (response) {
            vm.countries = response.data.countries;
        })
        .catch(function (response) {
            console.log(response);
        })
        .finally(function (response) {
            console.log(response);
        })


    }

    angular.module("register")
    .controller("registerCtrl", ["registerSvc", "lookupSvc", registerCtrl])

}
    
)();