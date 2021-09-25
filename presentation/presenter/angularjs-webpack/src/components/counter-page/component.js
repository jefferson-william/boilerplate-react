import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/core/store/rxjs/counter'
import template from './template.html'

angular.module('app').component('counterPage', {
  template,
  controllerAs: 'CounterPage',
  controller: function CounterPageController($scope, $timeout) {
    $scope.reactIncrementDecrement = System.import('@react/increment-decrement')
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })
  },
})
