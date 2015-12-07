System.registerDynamic("app/main.js", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  angular.module('app', []).controller('MyController', ['$scope', function() {}]);
  global.define = __define;
  return module.exports;
});

//# sourceMappingURL=build.js.map