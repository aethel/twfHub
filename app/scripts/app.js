'use strict';

/**
 * @ngdoc overview
 * @name twfHubApp
 * @description
 * # twfHubApp
 *
 * Main module of the application.
 */
angular
	.module('twfHubApp', [
		'ngAnimate',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'twfHubApp.jsonService',
		'angularVideoBg',
        'duScroll'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
