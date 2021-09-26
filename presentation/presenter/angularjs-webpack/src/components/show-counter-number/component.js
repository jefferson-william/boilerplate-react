import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/core/store/rxjs/counter'
import template from './template.html'

angular.module('app').component('showCounterNumber', {
  template,
  controllerAs: 'ShowCounterNumber',
  controller: [
    '$scope',
    '$timeout',
    function ShowCounterNumberController($scope, $timeout) {
      $scope.counter = counterInitialData

      counterBehaviorSubject.subscribe((data) => {
        $scope.counter = data

        $timeout(() => $scope.$digest(), 0)
      })
    },
  ],
})
