import { useState, useEffect } from 'react'
import buttonStyle from '../styles/Button.module.scss'
import { useWindowScroll } from 'react-use'

export const BtnTop = () => {
  const [visible, setVisible] = useState(false)
  const { y: pageYOffset } = useWindowScroll()

  useEffect(() => {
    if (pageYOffset > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      {!visible ? (
        false
      ) : (
        <button
          className={buttonStyle['btn-top']}
          title="Top"
          onClick={scrollToTop}
        >
          Top
        </button>
      )}
    </>
  )
}
