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
            title: "Global Imagery",
            source: new ol.source.TileWMS({
              url: 'http://maps.opengeo.org/geowebcache/service/wms',
              params: {LAYERS: 'openstreetmap', VERSION: '1.1.1'}
            })
          })
        ],
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 0,
          maxResolution: 0.703125
        })
      });
  // ...
})

