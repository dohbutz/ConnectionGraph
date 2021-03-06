angular.module("graphapp").factory('salesforceconnections',function($http){
    // Public API here
    return {
		getUserIdToSubscriberIds: function (){
			return $http({
				url: '/UserIdToSubscriberIds',
				method: 'GET'
			})
		},
		getChatterGroupIdToSubscriberIds: function (){
			return $http({
				url: '/ChatterGroupIdToSubscriberIds',
				method: 'GET'
			})
		},
		getUserIdToChatterGroupIds: function (){
			return $http({
				url: '/UserIdToChatterGroupIds',
				method: 'GET'
			})
		},
		getIdToName: function (){
			return $http({
				url: '/IdToName',
				method: 'GET'
			})
		},
		getOauthObject: function(){
			return $http({
				url: '/oauth',
				method: 'GET'
			});
		},
		
		getSourceUsers : function(){ //go to node server and get users passed from parameters
			return $http({
				url: '/sourceUserId',
				method: 'GET'
			});
		},
		getTargetUsers : function(){ //go to node server and get users passed from parameters
			return $http({
				url: '/targetUserId',
				method: 'GET'
			});
		}
	}
});


/********* for debugging *********/
angular.module("debug").factory('salesforceconnections',function($http){
    // Public API here
    return {
		getUserIdToSubscriberIds: function (){
			return $http({
				url: '/UserIdToSubscriberIds',
				method: 'GET'
			})
		},
		getChatterGroupIdToSubscriberIds: function (){
			return $http({
				url: '/ChatterGroupIdToSubscriberIds',
				method: 'GET'
			})
		},
		getUserIdToChatterGroupIds: function (){
			return $http({
				url: '/UserIdToChatterGroupIds',
				method: 'GET'
			})
		},
		getIdToName: function (){
			return $http({
				url: '/IdToName',
				method: 'GET'
			})
		}
	}
});