/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp')
    .directive('appFoot', function(){
        return {
            templateUrl: '../html/directive-templates/directive-two-template.html',
            controller: 'directiveTwoCtrl'
        }
    });