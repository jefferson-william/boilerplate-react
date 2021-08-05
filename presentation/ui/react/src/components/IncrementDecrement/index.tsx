import React, { useEffect, useState } from 'react'
import { counterBehaviorSubject, counterInitialData } from '@app/rxjs/counter'

const IncrementDecrement: React.FC = () => {
  const [counter, setCounter] = useState<typeof counterInitialData>(counterInitialData)

  useEffect(() => {
    counterBehaviorSubject.subscribe({
      next: (data) => setCounter(data),
    })
  }, [])

  return (
    <div>
      <button type="button" onClick={() => counterBehaviorSubject.next({ ...counter, value: counter.value + 1 })}>
        INCREMENT
      </button>
      <button type="button" onClick={() => counterBehaviorSubject.next({ ...counter, value: counter.value - 1 })}>
        DECREMENT
      </button>
      <p>react: {counter.value}</p>
    </div>
  )
}

export default IncrementDecrement
