/// <reference path="../../typings/tsd.d.ts" />
var angular = require('angular');
var logic = require('./logic');
angular.module('app', [])
    .controller('MyController', ['$scope', logic]);
//.controller('baal', ['$scope']);
//(s) => {
//s.greeting = process.version;
//}]); 
