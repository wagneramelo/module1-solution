
angular.module('LunchCheck', [])
.controller('LunchCheckController', ['$scope', function($scope){
	$scope.dishes = '';
	var qtyDishes = [];
	

	$scope.splitIt = function(item){
		
		var re = /\s*,\s*/;

			if($scope.dishes == undefined){
				alert('Please insert a data!')
			}
			else{
				qtyDishes = item.split(re);

				if(qtyDishes.length<=3){
					alert('Enjoy!');
				}
				else{
					alert('Too Much!!');
				}
			}
			$scope.dishes = undefined; //reset the form
		}


}]);