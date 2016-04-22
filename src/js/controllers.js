/**
 * Created by dell on 2016/4/19.
 */
angular.module('appController',[])
    .controller('HomeController',
        ['$scope','$location',function($scope,$location){
            $scope.signIn = function(){
                $location.path('login');
            }
        }]
    )
    .controller('HeaderController',
        ['$scope','$location',function($scope,$location){
            $scope.back = function () {
                $location.back();
            }
        }]
    )
    .controller('ModulesController',
        ['$scope','$location',function($scope,$location){
            $scope.test1 = function (){
                $location.path($location.path()+'/test1');
            };
            $scope.test2 = function (){
                $location.path($location.path()+'/test2');
            };
            $scope.test3 = function (){
                $location.path($location.path()+'/test3');
            };
            $scope.test4 = function (){
                $location.path($location.path()+'/test4');
            }
        }]
    )
    .controller('LoginController',
        ['$scope','$http','$location',function($scope,$http,$location){
            $scope.verific = function(){
                $http.post("../php/hello.php",$scope.user).then(function (response) {
                    if(response.data && response.data.new_id){
                        $location.path(response.data.new_id);
                    }else{
                        $scope.validateTip = response.data.ERROR;
                    }
                });
            }
        }]
    )
    .controller('Test1Controller',
        ['$scope',function($scope){

        }])
    .controller('Test2Controller',
        ['$scope',function($scope){

        }])
    .controller('Test3Controller',
        ['$scope',function($scope){

        }])
    .controller('Test4Controller',
        ['$scope',function($scope){

        }]
    );