/**
 * Created by dell on 2016/4/18.
 */
angular.module('myApp',
    [
        'ngRoute',
        'ngAnimate',
        'appController'
    ])
    .config(
        ['$routeProvider',function($routeProvider){
            $routeProvider.
                when('/', {
                    controller: 'HomeController',
                    templateUrl: 'modules/home/home.html'
                }).
                when('/modules',{
                    controller:'ModulesController',
                    templateUrl:'modules/modules.html'
                }).
                when('/login',{
                    controller: 'LoginController',
                    templateUrl: 'modules/login/login.html'
                }).
                when('/modules/test1', {
                    controller: 'Test1Controller',
                    templateUrl: 'modules/test1/test1.html'
                }).
                when('/modules/test2', {
                    controller: 'Test2Controller',
                    templateUrl: 'modules/test2/test2.html'
                }).
                when('/modules/test3', {
                    controller: 'Test3Controller',
                    templateUrl: 'modules/test3/test3.html'
                }).
                when('/modules/test4', {
                    controller: 'Test4Controller',
                    templateUrl: 'modules/test4/test4.html'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]
    );