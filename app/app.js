(function() {
	'use strict';

	var app = angular.module('myApp', []);

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
