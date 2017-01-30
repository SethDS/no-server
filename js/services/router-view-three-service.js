/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('stateThreeService', function($http, $q, $timeout){

   this.getWeatherData = function(state, city){
      return $http({
         method: 'GET',
          url: 'http://api.wunderground.com/api/96eebf955f947991/conditions/q/' + state + '/' + city +'.json'
      }).then(function(response){
         console.log(response.data.current_observation)
         return response.data.current_observation
      })
   }

   });