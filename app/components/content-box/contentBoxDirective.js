angular.module('twfHubApp').directive('contentBox',function(){
		return {
				restrict: 'E',
				templateUrl: '../components/content-box/contentBox.html',
				transclude: true,
				scope: {
						content: '=',
						type: '='
				}
		}
});
