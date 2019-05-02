app.controller("PeopleController", ['$scope', 'DataService',
                function ($scope, DataService) {
	var dialog = $('#infoModal');
	var infoText = $('#infoText'); 
	$scope.loadPerson = function(id){
		var onSuccess = function(data){
			$scope.person = data;
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
			
		}
		DataService.getPerson(id, onSuccess, onError);
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
	
	$scope.deletePerson = function(id){
		var onSuccess = function(data){
			infoText.html("Person Deleted");
			if($scope.person.id === id){
				$scope.clear();
			}
			dialog.modal('show');
			loadPeople();
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
		}
		DataService.removePerson(id, onSuccess, onError);
	};
	
	$scope.savePerson = function(){
		var onSuccess = function(data){
			console.info("Person added");
			$scope.person = data;
			loadPeople();
		};
		var onError = function(data, error){
			console.error(data);
			console.error(error);
		}
		DataService.addPerson($scope.person, onSuccess, onError);
	};
	$scope.clear = function(){
		$scope.person.id = null;
		$scope.person.firstName = null;
		$scope.person.lastName = null;
		$scope.person.email = null;
		$scope.person.address = null;
		$scope.person.createdDate = null;

	}
	var init = function (){
		loadPeople();
	};
	
	init();
}]);