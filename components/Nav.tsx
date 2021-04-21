import { Container } from './Container'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import navStyle from '../styles/Nav.module.scss'
import NavBurger from './NavBurger'
import { useState } from 'react'

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
      <header className={navStyle.navMain}>
        <div className={navStyle.logo}>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <NavBurger onClick={handleNavCollapsed} />
        <nav>
          <ul
            className={`${navStyle['nav-list']} ${
              isNavCollapsed ? navStyle['collapse-active'] : navStyle.collapse
            }`}
          >
            {navItems.map((navItem) => (
              <li key={navItem.id}>
                <Link href={navItem.link}>
                  <LinkScroll
                    activeClass={navStyle['nav--active']}
                    to={navItem.id}
                    spy={true}
                    smooth={true}
                    duration={1000}
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
