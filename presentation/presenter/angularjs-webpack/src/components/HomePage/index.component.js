import angular from 'angular'
import { counterBehaviorSubject } from '@app/rxjs/counter'
import template from './index.template.html'

angular.module('app').component('homePage', {
  template,
  controller: function HomePageController($scope) {
    counterBehaviorSubject.subscribe({
      next: (data) => {
        $scope.counter = data
      },
    })
  },
})
