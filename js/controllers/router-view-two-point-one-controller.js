/**
 * Created by Seth on 1/27/2017.
 */
angular.module('myApp')
    .controller('stateTwoPointOneCtrl', function($scope, stateTwoPointOneService, $stateParams ){

        $scope.singlePoke = $stateParams.id
});