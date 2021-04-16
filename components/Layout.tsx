import { Props } from '../interfaces/index'
import { BtnTop } from './BtnTop'
import Meta from './Meta'
import { Nav } from './Nav'


const Layout = ({ children }: Props) => {

  return (
    <>
      <Meta />
      <Nav />
      <main>{children}</main>
      <BtnTop />
    </>
  )
}

export default Layout
