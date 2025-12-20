import { useEffect, useRef } from "react"

type UseOutsideClickCallback = () => void

/**
 * Hook that calls `callback` when a click/touch happens outside the referenced element.
 *
 * Usage:
 * const ref = useOutsideClick<HTMLDivElement>(() => { ... })
 * return <div ref={ref}>...</div>
 */
export function useOutsideClick<T extends HTMLElement>(
  callback: UseOutsideClickCallback
) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const element = ref.current
      if (!element) return

      if (!element.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener("mousedown", handlePointerDown)
    document.addEventListener("touchstart", handlePointerDown)

    return () => {
      document.removeEventListener("mousedown", handlePointerDown)
      document.removeEventListener("touchstart", handlePointerDown)
    }
  }, [callback])

  return ref
}