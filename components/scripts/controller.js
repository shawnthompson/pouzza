var bandList = angular.module('bandList', []);

bandList.controller('bandListCtrl', ['$scope', '$http', function ($scope, $http) {
  $http.get('https://spreadsheets.google.com/feeds/list/15CQjePyGMVarcr5cyYo_kUjZaJ0jiKGUmMW4Yu93qbA/1/public/values?alt=json').success(function(data) {
      $scope.bands = data;
  });
}]);
