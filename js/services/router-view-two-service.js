/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('stateTwoService', function($http, $q, $timeout){

    this.getPokemon = function(){
        return $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/'
        }).then(function(response){
            var pokemon =  response.data.results;
            return pokemon
        })
    }
});