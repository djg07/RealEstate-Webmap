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

.controller('MapController', function($scope) {  //working
  $scope.mapTitle = 'RE App';
  // ...
});

