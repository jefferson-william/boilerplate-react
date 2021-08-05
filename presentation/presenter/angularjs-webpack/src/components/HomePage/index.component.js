import angular from 'angular'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'
import template from './index.template.html'
import './index.css'

angular.module('app').component('homePage', {
  template,
  controllerAs: 'HomePage',
  controller: function HomePageController($scope, $timeout) {
    $scope.counter = counterInitialData

    counterBehaviorSubject.subscribe((data) => {
      $scope.counter = data

      $timeout(() => $scope.$digest(), 0)
    })
  },
})
