import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'
import template from './index.template.html'

angular.module('app').component('homePage', {
  template,
  controller: function HomePageController($scope) {
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data
    })
  },
})
