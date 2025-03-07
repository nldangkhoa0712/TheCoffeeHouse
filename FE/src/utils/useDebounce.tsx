import { useEffect, useState } from 'react'

export const useDebounce = <T,>(value: T, time: number = 500): T => {
  const [debounceValue, setDebounceValue] = useState<T>(value)
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebounceValue(value)
    }, time)
    return () => {
      clearTimeout(debounce)
    }
  }, [value, time])

  return debounceValue
}
