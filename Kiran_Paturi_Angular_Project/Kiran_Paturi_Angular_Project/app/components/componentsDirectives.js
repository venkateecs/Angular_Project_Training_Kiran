(
  
    function () {

        function nbBrandName() {
            return {
                template: '<a class="navbar-brand" href="#">{{company}}</a>',
                scope: {
                    company: "@"
                }
            };
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

        function nbShow() {
            return {
                restrict: "A",
                link: function (x, element, attr) {
                    console.log(x);
                    console.log(element);
                    console.log(attr);
                }
            }
        }

        function nbDatePicker() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attrs) {
                    console.log("nbDatePicker");
                    console.log(scope);
                    element.datepicker();
                }
            }
        }

        function nbEnter() {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    element.bind("keypress", function (e) {
                        if (e.keyCode == 13) {
                            console.log(attrs["nbEnter"]);
                            console.log("Enter key pressed");
                            var methodName = attrs["nbEnter"];
                            scope.$eval(methodName);
                        }
                    });
                }
            }
        };
        //Isolated Scope based directives

        function nbCustomDate() {
            return {
                restrict: "A",
                scope: {},
                link: function (scope, element, attrs) {
                    console.log("nbCustomDate");
                    scope.range = "100";
                    element.datepicker();
                    console.log(scope);
                }
            }
        };

        function nbDetails() {
            return {
                restrict: "A",
                scope: {
                    heading: "@",
                    details: "=",
                    saveDetails:"&"
                },
                templateUrl:"app/components/nbDetails.html",
                compile: function (element, attr) {
                    console.log(element);
                    console.log(attr);
                    return {
                        pre: function (scope, element, attr) {

                        },
                        post: function (scope,element,attr) {
                        }
                    }
                }
            }
        }

        function nbpassword() {
            return {
                restrict: "A",
                require: "ngModel",
                link: function (scope, element, attrs, ctrl) {
                    ctrl.$formatters.unshift(checkValue);
                    ctrl.$parsers.unshift(checkValue);
                    function checkValue(data) {
                        console.log(data);
                        if (data.length > 6 && data.length < 10) {
                            ctrl.$setValidity("nbpassword", true);
                        }
                        else {
                            ctrl.$setValidity("nbpassword", false);
                        }
                        return data;
                    }
                }
            }
        }

        angular.module("components")        
        .directive("nbHeader", [nbHeader])        
        .directive("nbShow", [nbShow])
        .directive("nbDatePicker", [nbDatePicker])
        .directive("nbEnter", [nbEnter])
        .directive("nbDetails", [nbDetails])
        .directive("nbCustomDate", [nbCustomDate])
        .directive("nbpassword", [nbpassword]);
        

    }
    
  )();