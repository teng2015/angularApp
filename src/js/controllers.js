/**
 * Created by dell on 2016/4/19.
 */
angular.module('appController',[])
    .controller('LoginController',
        ['$scope','$http',function($scope,$http,$location){

            $scope.verific = function(){

                $http.post("../php/hello.php",$scope.user).then(function (response) {
                    console.log(response);
                    if(response.data && response.data.new_id){
                        $location.path( "modules/"+response.data.new_id);
                        console.log(response.data);
                    }else{
                        $scope.validateTip = response.data.ERROR;
                    }
                });
            }
        }]
    )
    .controller('ModulesController',
        ['scope',function($scope){

        }])
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