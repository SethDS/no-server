/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp', ['ui.router', 'ngGrid'])
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: '../html/router-views/home.html',
            controller: 'mainCtrl'
        })
        .state ('stateOne',{
            url: '/one',
            templateUrl: '../html/router-views/router-view-one.html',
            controller: 'stateOneCtrl'
        })
        .state ('stateTwo', {
            url: '/two',
            templateUrl: '../html/router-views/router-view-two.html',
            controller: 'stateTwoCtrl'
        })
        .state ('poke', {
            url: '/poke/:id',
            templateUrl: '../html/router-views/router-view-two-point-one.html',
            controller: 'stateTwoPointOneCtrl'
        })
        .state('stateThree', {
            url: '/three',
            templateUrl: '../html/router-views/router-view-three.html',
            controller: 'stateThreeCtrl'
        })
});