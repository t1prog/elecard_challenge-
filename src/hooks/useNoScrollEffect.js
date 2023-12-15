import { useEffect } from 'react'

const useNoScrollEffect = (trigger, target) => {
  useEffect(() => {
    const triggerOn = () => {
      target.classList.add('no-scroll')
    }

    const triggerOff = () => {
      target.classList.remove('no-scroll')
    }

    if (trigger) {
      triggerOn()
    } else {
      triggerOff()
    }

    return () => {
      triggerOff()
    }
  }, [trigger, target])
}

export default useNoScrollEffect
