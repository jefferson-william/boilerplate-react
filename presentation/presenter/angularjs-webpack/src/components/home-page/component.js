import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/core/store/rxjs/counter'
import template from './template.html'

angular.module('app').component('homePage', {
  template,
  controllerAs: 'HomePage',
  controller: function HomePageController($scope, $timeout) {
    $scope.reactIncrementDecrement = System.import('@app/react/components/IncrementDecrement')
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })
  },
})
