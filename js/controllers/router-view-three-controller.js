/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('stateThreeCtrl', function($scope, stateThreeService, mainService){

    $scope.getWeatherData = function(state, city){
        stateThreeService.getWeatherData(state, city).then(function(response){
            $scope.weather = response
        })
    }

    $scope.getWeatherData()
});
