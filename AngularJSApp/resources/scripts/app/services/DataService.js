app.factory('DataService',  ['$http', function ($http) {
		var baseApp = 'http://localhost:9080/api';
	
	    var factory =
	    {
    		getPeople: function (callback,errorCallback) {
    			return $http.get(baseApp+'/People').success(callback).error(errorCallback);
    		},
    		getPeople: function (id, callback,errorCallback) {
    			return $http.get(baseApp+'/People/'+id).success(callback).error(errorCallback);
    		},
    		addPeople: function (params, callback,errorCallback) {
    			return $http.post(baseApp+'/People', params).success(callback).error(errorCallback);
    		},
    		removePerson: function (id, callback,errorCallback) {
    			return $http.delete(baseApp+'/People/'+id).success(callback).error(errorCallback);
    		},
	    		
	    };
	    return factory;
	    
}]);
