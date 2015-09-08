(function() {
	'use strict';

	var app = angular.module('myApp', ['ngRoute']);
	
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode(true)
			.hashPrefix('!');

		$routeProvider
			.when('/', {
				templateUrl: 'welcome.html'
			})
			.when('/cours1', {
				templateUrl: 'cours/cours1.html'
			})
			.when('/cours2', {
				templateUrl: 'cours/cours2.html',
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.directive('myHeader', function() {
		console.log('Header');
		return {
			restrict: 'E',
			templateUrl: 'header.html',
			transclude: true
		};
	});
	
	app.directive('myBody', function() {
		console.log('Body');
		return {			
			restrict: 'E',
			templateUrl: 'body.html',
			transclude: true
		};
	});
	
	app.directive('myFooter', function() {
		console.log('Footer');
		return {
			restrict: 'E',
			templateUrl: 'footer.html',
			transclude: true
		};
	});
})();
