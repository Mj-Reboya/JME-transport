const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');

mix.copy('angular-build/main-es5.js', 'public/js/main-es5.js');
mix.copy('angular-build/polyfills-es5.js', 'public/js/polyfills-es5.js');
mix.copy('angular-build/runtime-es5.js', 'public/js/runtime-es5.js');
mix.copy('angular-build/main-es2015.js', 'public/js/main-es2015.js');
mix.copy('angular-build/polyfills-es2015.js', 'public/js/polyfills-es2015.js');
mix.copy('angular-build/runtime-es2015.js', 'public/js/runtime-es2015.js');
mix
  .copy('angular-build/styles.css', 'public/css/style.css')
  .copy('angular-build/assets', 'public/assets/');
mix.version();
