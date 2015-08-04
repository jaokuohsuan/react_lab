

/**
 * ES5 polyfills for PhantomJS
 */
require('core-js/es5');

/**
 * Create a set of webpack module ids for our project's modules, excluding
 * tests. This will be used to clear the module cache before each test.
 */
// var projectContext = require.context('./src', true, /^((?!__tests__).)*.jsx?$/);
// var projectModuleIds = Immutable.Set(
//   projectContext.keys().map(module => (
//     String(projectContext.resolve(module))
//   ))
// );




/**
 * Load each test using webpack's dynamic require with contexts.
 */
// var context = require.context('./src', true, /-test\.js?$/);
var context = require.context('./', true, /(s|S)pec\.js?$/);
context.keys().forEach(context);