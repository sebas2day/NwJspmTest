System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "typescript",
  typescriptOptions: {
    "module": "commonjs",
    "emitDecoratorMetadata": true
  },
  paths: {
    "npm:*": "../jspm/npm/*",
    "github:*": "../jspm/github/*"
  },

  packages: {
    "app": {
      "main": "app",
      "defaultExtension": "js"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "ts": "github:frankwallis/plugin-typescript@2.4.0",
    "typescript": "npm:typescript@1.7.3",
    "github:frankwallis/plugin-typescript@2.4.0": {
      "typescript": "npm:typescript@1.7.3"
    }
  }
});
