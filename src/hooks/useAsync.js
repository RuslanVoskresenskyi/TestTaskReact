import { useCallback, useState } from 'react'

export const useAsync = (asyncFunction) => {
  const [status, setStatus] = useState('idle')
  const [value, setValue] = useState(null)
  const [error, setError] = useState(null)

  const execute = useCallback((...args) => {
    setStatus('pending')
    setValue(null)
    setError(null)

    return asyncFunction(...args)
      .then((response) => {
        setValue(response)
        setStatus('success')
      })
      .catch((error) => {
        setError(error)
        setStatus('error')
      })
  }, [asyncFunction])

  return { execute, status, value, error }
}
