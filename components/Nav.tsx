import { Container } from './Container'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import navStyle from '../styles/Nav.module.scss'
import NavBurger from './NavBurger'
import { useState } from 'react'
import Button from './Button'

interface navItem {
  id: string
  name: string
  link: string
}

export const Nav = () => {
  const navItems: navItem[] = [
    {
      id: 'skills',
      name: 'Skills',
      link: '#',
    },
    {
      id: 'projects',
      name: 'Projects',
      link: '#',
    },
  ]

  const [isNavCollapsed, setNavCollapsed] = useState(false)
  const handleNavCollapsed = () => setNavCollapsed(!isNavCollapsed)

  return (
    <Container id="home">
      <header className={navStyle['nav-header']}>
        <div>
          <div className={navStyle['nav-logo']}>
            <Link href="/">
              <a>J.Andrew</a>
            </Link>
          </div>
          <NavBurger onClick={handleNavCollapsed} />
        </div>

        <nav
          className={`${navStyle['nav-list']} ${
            isNavCollapsed ? navStyle['collapse--active'] : navStyle.collapse
          }`}
        >
          <ul>
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <Link href={navItem.link}>
                  <LinkScroll
                    activeClass={navStyle['nav--active']}
                    to={navItem.id}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onClick={handleNavCollapsed}
                  >
                    {navItem.name}
                  </LinkScroll>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Container>
  )
}
