import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'
// import { registerApplication } from 'single-spa'
import template from './index.template.html'

angular.module('app').component('homePage', {
  template,
  controllerAs: 'HomePage',
  controller: function HomePageController($scope, $timeout) {
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })

    // registerApplication(
    //   '@react/increment-decrement',
    //   () => System.import('@react/increment-decrement'),
    //   (location) => location.pathname === '/',
    // )
  },
})
