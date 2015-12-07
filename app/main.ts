/// <reference path="../typings/tsd.d.ts" />

import angular = require('angular');
import logic = require('./logic');

angular.module('app', [])
	.controller('MyController', ['$scope', logic]);
	//.controller('baal', ['$scope']);
	//(s) => {
		//s.greeting = process.version;
	//}]);