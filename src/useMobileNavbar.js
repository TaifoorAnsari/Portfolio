import { useEffect, useState } from 'react'

export default function useMobileNavbar(menuOpen) {
  const [state, setState] = useState({ mobile: false, hidden: false, active: 'home' })

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 720px)')
    const header = document.querySelector('.site-header')
    const sections = [...document.querySelectorAll('main > section[id]')]
    let previousY = Math.max(0, window.scrollY)
    let hidden = false
    let frame = 0

    const update = () => {
      frame = 0
      const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight))
      let active = 'home'
      if (mobile.matches) {
        const marker = 66 + Math.min(120, window.innerHeight * 0.2)
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= marker) active = section.id
        }
        if (y > 0 && y + window.innerHeight >= document.documentElement.scrollHeight - 2) active = sections.at(-1)?.id || active

        const delta = y - previousY
        if (menuOpen || y <= 80 || (header?.contains(document.activeElement) && document.activeElement.matches(':focus-visible'))) {
          hidden = false
          previousY = y
        } else if (Math.abs(delta) >= 6) {
          hidden = delta > 0
          previousY = y
        }
      } else {
        hidden = false
        previousY = y
      }
      setState(previous => previous.mobile === mobile.matches && previous.hidden === hidden && previous.active === active
        ? previous : { mobile: mobile.matches, hidden, active })
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    const onScroll = () => { if (mobile.matches) schedule() }
    const onResize = () => { hidden = false; previousY = Math.max(0, window.scrollY); schedule() }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    header?.addEventListener('focusin', schedule)
    mobile.addEventListener('change', onResize)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      header?.removeEventListener('focusin', schedule)
      mobile.removeEventListener('change', onResize)
    }
  }, [menuOpen])

  return { hidden: state.mobile && state.hidden && !menuOpen, active: state.mobile ? state.active : null }
}
