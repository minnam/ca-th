import { useEffect, useState } from 'react'

export const withPage = (component, callback) => {
  return () => {
    const Component = component
    const [props, $props] = useState({})

    useEffect(() => {
      const run = async () => {
        $props(await callback())
      }

      run()
    }, [])

    return <Component {...props} />
  }
}