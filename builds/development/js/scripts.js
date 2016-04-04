

//--------------------------------
var bandList = angular.module('bandList', []);

bandList.controller('bandListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('./data/data.json').success(function(data) {
      $scope.bands = data;
  });
}]);
