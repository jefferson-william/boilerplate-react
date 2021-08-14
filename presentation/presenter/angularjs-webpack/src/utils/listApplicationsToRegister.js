const reactName = '@react/'

export const reactApplicationsNames = Object.freeze({
  incrementDecrement: `${reactName}increment-decrement`,
})

export const listApplications = Object.freeze({
  [reactApplicationsNames.incrementDecrement]: { routesToActivate: ['/', '/counter'] },
})
