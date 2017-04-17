
angular.module('LunchCheck', [])
.controller('LunchCheckController', ['$scope', function($scope){
	$scope.dishes = '';
	var qtyDishes = [];
	$scope.msg = '';
	

	$scope.checkLunch = function(item){
		
		var re = /\s*,\s*/;

			if($scope.dishes == undefined){
				$scope.msg = 'Please insert a data!';
			}
			else{
				qtyDishes = item.split(re);

				if(qtyDishes.length<=3){
					$scope.msg = 'Enjoy!';
				}
				else{
					$scope.msg = 'Too Much!!';
				}
			}
			$scope.dishes = undefined; //reset the form
		}


}]);