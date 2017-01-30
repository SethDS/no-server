/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp')
    .directive('navBar', function(){
        return {
            templateUrl: '../html/directive-templates/directive-one-template.html',
            restrict: 'E',
            scope: {},
            link: function (scope, element, attributes) {

                scope.stateActive = function(stateAct){
                    var whichState = stateAct;

                    if(whichState === 'home'){
                        element.css("text-decoration", "line_through");
                    }
                }


            }
        }
    });