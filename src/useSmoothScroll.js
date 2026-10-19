import { useEffect } from 'react'
import Lenis from 'lenis'

export default function useSmoothScroll(menuOpen) {
  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis

    const update = () => {
      lenis?.destroy()
      lenis = undefined
      if (motionPreference.matches || menuOpen) return

      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.1,
        respectReducedMotion: true,
      })
    }

    update()
    motionPreference.addEventListener('change', update)
    return () => {
      motionPreference.removeEventListener('change', update)
      lenis?.destroy()
    }
  }, [menuOpen])
}
