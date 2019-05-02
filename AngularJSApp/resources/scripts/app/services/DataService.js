app.factory('DataService',  ['$http', function ($http) {
		var restURL = 'http://localhost:9080/demo/api/people';
	
	    var factory =
	    {
    		getPeople: function (callback,errorCallback) {
				console.info('get people');
    			return $http.get(restURL).success(callback).error(errorCallback);
    		},
    		getPerson: function (id, callback,errorCallback) {
    			return $http.get(restURL+'/'+id).success(callback).error(errorCallback);
    		},
    		addPerson: function (params, callback,errorCallback) {
    			return $http.post(restURL, params).success(callback).error(errorCallback);
    		},
    		removePerson: function (id, callback,errorCallback) {
    			return $http.delete(restURL+'/'+id).success(callback).error(errorCallback);
    		},
	    		
	    };
	    return factory;
	    
}]);
