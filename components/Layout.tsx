import { ReactNode } from 'react'
import { Props } from '../interfaces/index'
import Meta from './Meta'

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
