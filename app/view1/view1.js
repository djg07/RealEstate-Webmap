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
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'sat'})
          })
        ],
        view: new ol.View({
          center: ol.proj.transform([-79.45,43.65], 'EPSG:4326', 'EPSG:3857'),
          zoom: 11
        })
      });

  // ...
});

