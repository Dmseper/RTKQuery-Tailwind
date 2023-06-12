import {useEffect, useState} from "react";

export const useDebounce
  = (value: string, delay = 300): string => {
  const [debounce, setDebounced] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(handler)
  }, [value,delay])

  return debounce
}