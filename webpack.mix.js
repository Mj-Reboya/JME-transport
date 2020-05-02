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

// mix.js('resources/js/app.js', targetFolder + '/public/js')
//     .sass('resources/sass/app.scss', targetFolder + '/public/css');

const buildFolder = 'angular-build';
const targetFolder = 'public/front-end';
// mix.copy(buildFolder + '/*.js', targetFolder + '/public/js/');
// mix.copy(buildFolder + '/polyfills-es5.js', targetFolder + '/public/js/polyfills-es5.js');
// mix.copy(buildFolder + '/runtime-es5.js', targetFolder + '/public/js/runtime-es5.js');
// mix.copy(buildFolder + '/main-es2015.js', targetFolder + '/public/js/main-es2015.js');
// mix.copy(buildFolder + '/polyfills-es2015.js', targetFolder + '/public/js/polyfills-es2015.js');
// mix.copy(buildFolder + '/runtime-es2015.js', targetFolder + '/public/js/runtime-es2015.js');
// .copy(buildFolder + '/index.html', 'resources/views/dev.blade.php')

mix
	.disableSuccessNotifications()
	.copy(buildFolder + '/*.js', 'public/js')
	.copy(buildFolder + '/*.css', 'public/css')
	.copy(buildFolder + '/assets/*', 'public/assets')
	.version();
