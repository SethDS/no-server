/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('stateTwoCtrl', function($scope, stateTwoService, mainService){

    stateTwoService.getPokemon().then(function(response){
        $scope.pokemon = response
    });

    console.log($scope.pokemon)
});
