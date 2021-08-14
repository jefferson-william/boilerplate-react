import singleSpaAngularJS from 'single-spa-angularjs'
import angular from 'angular'

const ngLifecycles = singleSpaAngularJS({
  angular,
  mainAngularModule: 'app',
  uiRouter: false,
  ngRoute: true,
  preserveGlobal: true,
})

export const { bootstrap, mount, unmount } = ngLifecycles
