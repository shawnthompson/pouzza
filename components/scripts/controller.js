var bandList = angular.module('bandList', []);

bandList.controller('bandListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('./js/data.json').success(function(data) {
      $scope.bands = data;
  });
}]);
