import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'
import template from './index.template.html'

angular.module('app').component('showCounterNumber', {
  template,
  controllerAs: 'ShowCounterNumber',
  controller: function ShowCounterNumberController($scope, $timeout) {
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })
  },
})
