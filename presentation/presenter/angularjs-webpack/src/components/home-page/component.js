import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'
// import * as reactIncrementDecrement from '@app/react/src/components/IncrementDecrement/single.spa'
// import { reactApplicationsNames } from '../../utils/listApplicationsToRegister'
// import { registerApplication } from '../../utils/registerApplication'
import template from './template.html'

angular.module('app').component('homePage', {
  template,
  controllerAs: 'HomePage',
  controller: function HomePageController($scope, $timeout) {
    $scope.reactIncrementDecrement = System.import('@react/increment-decrement')
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })

    // registerApplication(reactApplicationsNames.incrementDecrement)
  },
})
