import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/core/store/rxjs/counter'
import template from './template.html'

angular.module('app').component('counterPage', {
  template,
  controllerAs: 'CounterPage',
  controller: [
    '$scope',
    '$timeout',
    function CounterPageController($scope, $timeout) {
      $scope.reactIncrementDecrement = System.import('@app/react/components/IncrementDecrement')
      $scope.counter = counterInitialData

      counterBehaviorSubject.subscribe((data) => {
        $scope.counter = data

        $timeout(() => $scope.$digest(), 0)
      })
    },
  ],
})
