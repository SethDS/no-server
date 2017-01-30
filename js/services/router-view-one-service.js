/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('stateOneService', function($http, $q, $timeout){

    this.getStarWars = function(){
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/'
        }).then(function(response){
            var starWars =  response.data.results;
            console.log(starWars)
            return starWars
        })
    }
});