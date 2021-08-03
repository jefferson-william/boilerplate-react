import angular from 'angular'

angular.module('app').config([
  '$routeProvider',
  '$locationProvider',
  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
      .when('/', {
        template: '<home-page></home-page>',
      })
      .when('/show-counter-number', {
        template: '<show-counter-number></show-counter-number>',
      })
      .otherwise('/')
  },
])
