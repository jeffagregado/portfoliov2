import { ReactNode } from 'react'
import { Props } from '../interfaces/index'
import Meta from './Meta'
import { Nav } from './Nav'

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Nav />
      <main>{children}</main>
    </>
  )
}

export default Layout
