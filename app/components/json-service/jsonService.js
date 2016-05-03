angular.module('twfHubApp.jsonService',[])
	.factory('jsonServiceAPI', ['$http', function($http){
		var jsonAPI = {};

		jsonAPI.getData = function(){
			return $http.get('/json/homepage-blurbs.json');
		}

		return jsonAPI;
	}]);
