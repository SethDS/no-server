/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('stateOneCtrl', function($scope, stateOneService, mainService){

    $scope.swGridOptions = {
        data: "starWarsPeople",
        height: '110px',
        sortInfo: {fields: ['Name', 'Height', 'Birth Year'], directions: ['asc']},
        columnDefs: [
            {
                field: 'name',
                displayName: 'Name',
                width: '110px',
            },
            {
                field: 'height',
                displayName: 'Height',
                width: '110px',
            },
            {
                field: 'birth_year',
                displayName: 'Birth Year',
                width: '110px',

            },
            {
                field: 'films',
                displayName: 'Movies',
                width: '110px',
            },
            {
                field: 'starships',
                displayName: 'Star Ships',
                width: '110px',
            },
            {
                field: 'homeworld',
                displayName: 'Home World',
                width: '110px',
            },
            {
                field: 'vehicles',
                displayName: 'Vehicles',
                width: '110px',
            }

        ]
    }

    $scope.getTheStarWars = function(){
        stateOneService.getStarWars().then(function(response){
            $scope.starWarsPeople = response
        })
    }

    $scope.getTheStarWars()
});
