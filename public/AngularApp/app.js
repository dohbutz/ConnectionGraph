/************* graph app *************/
var graphApp = angular.module("graphapp",["debug"]);
var debugApp = angular.module("debug",[]);

graphApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: "/AngularApp/views/ConnectionGraph.html",
		controller: "ConnectionGraphCtrl"
	})/*
	.when('/debug',{
		templateUrl: "/AngularApp/views/debug.html",
		controller: "debugCtrl"
	})*/
	.otherwise({
		template:"This page does not exist! Check your angular path yo!"
	});
});


