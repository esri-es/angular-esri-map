'use strict';
    
    


angular.module('esri-webmap-example')
  .controller('SimpleMapCtrl', function($scope) {
      $scope.map = {
          center: {
              lng: -122.45,
              lat: 37.75
          },
          zoom: 13
      };
  });	