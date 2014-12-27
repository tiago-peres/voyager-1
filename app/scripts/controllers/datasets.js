'use strict';

angular.module('vleApp')
  .controller('DatasetsCtrl', function ($scope, Config, Dataset) {
    $scope.datasets = Dataset.datasets;
    $scope.myDataset = Dataset.dataset;

    $scope.Dataset = Dataset;

    $scope.$watch('myDataset', function(newVal, oldVal) {
      Dataset.update(newVal);
    });
});
