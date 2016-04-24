(function() {

	var app = angular.module('bandList', []);

	app.controller('bandListCtrl', ['$scope', '$http', function ($scope, $http) {


		$http.get('./js/data.json').then(function(bandData) {
			$scope.bands = bandData.data;
			// $scope.fridayBands = "";
			// $scope.saturdayBands = "";
			// $scope.sundayBands = "";
		});

	}]);

})();

