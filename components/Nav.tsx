import { Container } from './Container'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import navStyle from '../styles/Nav.module.scss'

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
      id: 'portfolio',
      name: 'Portfolio',
      link: '#',
    },
  ]

  return (
    <Container>
      <nav className={navStyle.navMain}>
        <Link href="/">
          <a className={navStyle.logo}>Logo</a>
        </Link>
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
                >
                  {navItem.name}
                </LinkScroll>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  )
}
