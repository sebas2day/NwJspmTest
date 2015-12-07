
function MyController($scope) {
	$scope.greeting = 'World' + process.version;
}

export = MyController;