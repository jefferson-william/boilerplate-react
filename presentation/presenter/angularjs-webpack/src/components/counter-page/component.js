import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'
import { reactApplicationsNames } from '../../utils/listApplicationsToRegister'
import { registerApplication } from '../../utils/registerApplication'
import template from './template.html'

angular.module('app').component('counterPage', {
  template,
  controllerAs: 'CounterPage',
  controller: function CounterPageController($scope, $timeout) {
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })

    registerApplication(reactApplicationsNames.incrementDecrement)
  },
})
