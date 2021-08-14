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
      .when('/counter', {
        template: '<counter-page></counter-page>',
      })
      .otherwise('/')
  },
])
