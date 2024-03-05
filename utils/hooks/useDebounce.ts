import { useState } from 'react'

type Timer = ReturnType<typeof setTimeout>
type SomeFunction = (...args: unknown[]) => void

const useDebounce = <Func extends SomeFunction>(func: Func, delay = 1000) => {
  const [timer, setTimer] = useState<Timer>()

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args)
    }, delay)
    clearTimeout(timer)
    setTimer(newTimer)
  }) as Func

  return debouncedFunction
}

export default useDebounce
