var aquaApp = angular.module('aquaApp', [
  'ngRoute',
  'ngSanitize',
  'aquaControllers'
]);

aquaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'aboutCtrl'
      }).
      when('/products', {
        templateUrl: 'partials/products.html',
        controller: 'productsCtrl'
      }).
      when('/services', {
        templateUrl: 'partials/services.html',
        controller: 'servicesCtrl'
      });
  }]);
