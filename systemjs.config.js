/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/material': 'npm:@angular/material/material.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'ng2-bootstrap': 'npm:ng2-bootstrap',
      'text-mask-core': 'npm:text-mask-core',
      'angular2-text-mask': 'npm:angular2-text-mask/dist/angular2TextMask.js',
      'materialize-css': 'npm:materialize-css',
      'angular2-materialize': 'npm:angular2-materialize',
      'moment': 'npm:ng2-bootstrap/node_modules/moment/moment',
      'ng2-select': 'npm:ng2-select',
      'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js',
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'ng2-bootstrap': { main: 'ng2-bootstrap', defaultExtension: 'js' },
      'text-mask-core': { defaultExtension: 'js' },
      'angular2-text-mask': { defaultExtension: 'js'},
      'materialize-css': { main: 'js/materialize' },
      'angular2-materialize' : { main: 'dist/index', defaultExtension: 'js' },
      'ng2-select': { defaultExtension: 'js', main: 'ng2-select.js' }
    }
  });
})(this);