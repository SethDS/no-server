'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp', ['ui.router', 'ngGrid']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: '../html/router-views/home.html',
        controller: 'mainCtrl'
    }).state('stateOne', {
        url: '/one',
        templateUrl: '../html/router-views/router-view-one.html',
        controller: 'stateOneCtrl'
    }).state('stateTwo', {
        url: '/two',
        templateUrl: '../html/router-views/router-view-two.html',
        controller: 'stateTwoCtrl'
    }).state('poke', {
        url: '/poke/:id',
        templateUrl: '../html/router-views/router-view-two-point-one.html',
        controller: 'stateTwoPointOneCtrl'
    }).state('stateThree', {
        url: '/three',
        templateUrl: '../html/router-views/router-view-three.html',
        controller: 'stateThreeCtrl'
    });
});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('directiveOneCtrl', function ($scope) {});
/**
 * Created by Seth on 1/28/2017.
 */
"use strict";
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('directiveTwoCtrl', function ($scope) {});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('mainCtrl', function ($scope) {});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('stateOneCtrl', function ($scope, stateOneService, mainService) {

    $scope.swGridOptions = {
        data: "starWarsPeople",
        height: '110px',
        sortInfo: { fields: ['Name', 'Height', 'Birth Year'], directions: ['asc'] },
        columnDefs: [{
            field: 'name',
            displayName: 'Name',
            width: '110px'
        }, {
            field: 'height',
            displayName: 'Height',
            width: '110px'
        }, {
            field: 'birth_year',
            displayName: 'Birth Year',
            width: '110px'

        }, {
            field: 'films',
            displayName: 'Movies',
            width: '110px'
        }, {
            field: 'starships',
            displayName: 'Star Ships',
            width: '110px'
        }, {
            field: 'homeworld',
            displayName: 'Home World',
            width: '110px'
        }, {
            field: 'vehicles',
            displayName: 'Vehicles',
            width: '110px'
        }]
    };

    $scope.getTheStarWars = function () {
        stateOneService.getStarWars().then(function (response) {
            $scope.starWarsPeople = response;
        });
    };

    $scope.getTheStarWars();
});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('stateThreeCtrl', function ($scope, stateThreeService, mainService) {

    $scope.getWeatherData = function (state, city) {
        stateThreeService.getWeatherData(state, city).then(function (response) {
            $scope.weather = response;
        });
    };

    $scope.getWeatherData();
});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').controller('stateTwoCtrl', function ($scope, stateTwoService, mainService) {

    stateTwoService.getPokemon().then(function (response) {
        $scope.pokemon = response;
    });

    console.log($scope.pokemon);
});
'use strict';

/**
 * Created by Seth on 1/27/2017.
 */
angular.module('myApp').controller('stateTwoPointOneCtrl', function ($scope, stateTwoPointOneService, $stateParams) {

  $scope.singlePoke = $stateParams.id;
});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').directive('navBar', function () {
    return {
        templateUrl: '../html/directive-templates/directive-one-template.html',
        restrict: 'E',
        scope: {},
        link: function link(scope, element, attributes) {

            scope.stateActive = function (stateAct) {
                var whichState = stateAct;

                if (whichState === 'home') {
                    element.css("text-decoration", "line_through");
                }
            };
        }
    };
});
'use strict';

/**
 * Created by Seth on 1/28/2017.
 */
angular.module('myApp').directive('navigate', function () {

    return {
        templateUrl: '../html/directive-templates/directive-three-template.html',
        restrict: 'E'
    };
});
'use strict';

/**
 * Created by Seth on 1/25/2017.
 */
angular.module('myApp').directive('appFoot', function () {
    return {
        templateUrl: '../html/directive-templates/directive-two-template.html',
        controller: 'directiveTwoCtrl'
    };
});
'use strict';

/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('mainService', function ($http, $q, $timeout) {});
'use strict';

/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('stateOneService', function ($http, $q, $timeout) {

    this.getStarWars = function () {
        return $http({
            method: 'GET',
            url: 'http://swapi.co/api/people/'
        }).then(function (response) {
            var starWars = response.data.results;
            console.log(starWars);
            return starWars;
        });
    };
});
'use strict';

/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('stateThreeService', function ($http, $q, $timeout) {

   this.getWeatherData = function (state, city) {
      return $http({
         method: 'GET',
         url: 'http://api.wunderground.com/api/96eebf955f947991/conditions/q/' + state + '/' + city + '.json'
      }).then(function (response) {
         console.log(response.data.current_observation);
         return response.data.current_observation;
      });
   };
});
'use strict';

/**
 * Created by Seth on 1/27/2017.
 */
angular.module('myApp').service('stateTwoPointOneService', function ($http, $q, $timeout, $stateParams) {});
'use strict';

/**
 * Created by Seth on 1/26/2017.
 */
angular.module('myApp').service('stateTwoService', function ($http, $q, $timeout) {

    this.getPokemon = function () {
        return $http({
            method: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/'
        }).then(function (response) {
            var pokemon = response.data.results;
            return pokemon;
        });
    };
});
//# sourceMappingURL=bundle.js.map
