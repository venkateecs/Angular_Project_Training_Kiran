(
  
    function () {

        function nbBrandName() {
            return {
                template: '<a class="navbar-brand" href="#">{{brandName}}</a>'
                    }
        }

        function nbHeader() {
            var dir = {};

            dir.templateUrl = "app/header/header.html";
            dir.restrict = "A,E,C,M";

            return dir;

            //or

            /*return {
                templateUrl: "app/header/header.html",
                restrict:"A,E,C,M"
            }*/
        }

        angular.module("components")        
        .directive("nbHeader", [nbHeader]);
    }
    
  )();