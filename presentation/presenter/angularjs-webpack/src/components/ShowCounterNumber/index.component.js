import angular from 'angular'
import { counterBehaviorSubject } from '@app/rxjs/counter'
import template from './index.template.html'

angular.module('app').component('showCounterNumber', {
  template,
  controller: function ShowCounterNumberController($scope) {
    counterBehaviorSubject.subscribe({
      next: (data) => {
        $scope.counter = data
      },
    })
  },
})
