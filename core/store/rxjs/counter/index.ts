import { BehaviorSubject } from 'rxjs'

export const counterInitialData = Object.freeze({
  value: 0,
})

export const counterBehaviorSubject = new BehaviorSubject({
  ...counterInitialData,
})
