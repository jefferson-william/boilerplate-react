/* eslint-disable no-param-reassign */
import { mountRootParcel } from 'single-spa'
import angular from 'angular'

angular.module('app', ['ngRoute', 'single-spa-angularjs'])

angular.module('app').run(function Run($rootScope) {
  $rootScope.mountRootParcel = mountRootParcel
})
