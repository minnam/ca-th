import { useState, useRef } from 'react'

export const useSequence = (props = {
  sequences: [0, 1, 2, 3, 4],
  timeout: 100,
}) => {
  const [value, $value] = useState(0)
  const callback = useRef()

  const run = (from = 0, to = props.sequences.length) => {
    clearInterval(callback.current)
    $value(from)
    callback.current = setInterval(() => {
      $value(prev => {
        const newValue = prev + 1

        if (newValue < to) {
          return prev + 1
        } else {
          clearInterval(callback.current)
          return prev + 1
        }

      })
    }, props.timeout)
  }

  return [
    value,
    {
      run,
      isActive: () => value !== 0 && value !== props.sequences.length
    }
  ]
}
