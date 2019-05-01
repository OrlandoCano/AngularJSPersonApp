app.controller("PeopleController", ['$scope', 'DataService',
                function ($scope, DataService) {
	var dialog = $('#infoModal');
	var infoText = $('#infoText'); 
	$scope.loadPeople = function(id){
		var onSuccess = function(data){
			$scope.people = data;
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
			
		}
		DataService.getPeople(id, onSuccess, onError);
	};
	
	var loadPeople = function(){
		var onSuccess = function(data){
			$scope.people = data;
			console.info($scope.people);
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
		}
		DataService.getPeople(onSuccess, onError);
	};
	
	$scope.deletePeople = function(id){
		var onSuccess = function(data){
			infoText.html("Person Deleted");
			if($scope.people.id === id){
				$scope.clear();
			}
			dialog.modal('show');
			loadPeople();
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
		}
		DataService.removePeople(id, onSuccess, onError);
	};
	
	$scope.savePeople = function(){
		var onSuccess = function(data){
			console.info("Person added");
			$scope.people = data;
			loadPeople();
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
		}
		DataService.addPeople($scope.people, onSuccess, onError);
	};
	$scope.clear = function(){
		$scope.people.id = null;
		$scope.people.subjectName = null;
		$scope.people.semester = null;
	}
	var init = function (){
		loadPeople();
	};
	
	init();
}]);