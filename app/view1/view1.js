'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', function($scope) {  //working
  $scope.test = 'derp';
  // ...
})

.controller('MapController', function($scope) {  //working //Separate the controllers out into their own files!
  //$scope.mapTitle = 'RE App';                                 //see tut at 13:11


      L.mapbox.accessToken = 'pk.eyJ1IjoiZGdhbGF0aSIsImEiOiI5MVd5dV84In0.HBORjJfOqTCyqoMlKukIvA';
      var map = L.mapbox.map('map', 'dgalati.kgnfc438')
          .setView([43.7, -79.45], 11);


  // ...
});

