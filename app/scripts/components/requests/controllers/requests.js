/* global define */
(function() {
    'use strict';
    define(['lodash'], function(_) {
        var RequestsController = function(RequestTrackingService,$scope) {
        	$scope.tasks = [];
        	$scope.getRequests = function() {
				RequestTrackingService.getTrackedRequests().then(function(res) {
				$scope.tasks = res;
		});
	}
        };
        return ['RequestTrackingService','$scope', RequestsController];
    });
})();