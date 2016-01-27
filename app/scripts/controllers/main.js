'use strict';

/**
 * @ngdoc function
 * @name twfHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twfHubApp
 */
angular.module('twfHubApp')
	.controller('MainCtrl', ['jsonServiceAPI','$document', function (jsonServiceAPI,$document) {
		var thisCtrl = this;

			this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		jsonServiceAPI.getData().success(function(data){
				thisCtrl.blurbs = data;
		});

		thisCtrl.videos = [{
				videoId: '1_X6uuDjU9E'
		},{
				videoId: 'p6kH_rtjdC4'
		},{
				videoId: 'SbPZOeEwLDM'
		}];


		this.scrollToSection = function(target){
            var duration = 1000;
            var offset = 20;
            var scrollTarget = angular.element(document.getElementById(target));
            $document.scrollToElement(scrollTarget,offset,duration);
            
//			var windowTopOffset = window.pageYOffset,
//					targetOffset = document.getElementById(target).getBoundingClientRect().y;
//
//			window.scrollTo(0,windowTopOffset+targetOffset);
		}


var a = document.querySelectorAll('.float-nav a');
		for(var i=0;i<a.length;i++){
			a[i].addEventListener('click',function(e){
				e.preventDefault();
			})
		}
	}]);
