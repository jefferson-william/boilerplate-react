import React, { useEffect, useState } from 'react'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'

const ShowCounterNumber: React.FC = () => {
  const [counter, setCounter] = useState<typeof counterInitialData>(counterInitialData)

  useEffect(() => {
    counterBehaviorSubject.subscribe((data) => setCounter(data))
  }, [])

  return (
    <p>
      <b>Counter</b>: {counter.value}
    </p>
  )
}

export default ShowCounterNumber
