(
    function () {

        function userCtrl($scope, userSvc) {
            $scope.userCount = 10;
            userSvc.getUsers()
                .then(function (response) {
                    $scope.users = response.data.users;
                })
                .catch(function (response) {
                    console.log(response);
                });

            $scope.showMore = function () {
                $scope.userCount += 10;
            };
        }
        angular.module("user")
            .controller("userCtrl", ["$scope", "userSvc", userCtrl]);
    }

)();