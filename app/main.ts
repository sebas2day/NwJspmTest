import angular = require('angular');
import logic = require('./logic.ts');

angular.module('app', [])
	.controller('MyController', ['$scope', logic]);
	//(s) => {
		//s.greeting = process.version;
	//}]);