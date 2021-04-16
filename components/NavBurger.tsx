import navStyles from '../styles/Nav.module.scss'

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const NavBurger = ({ onClick }: Props) => {
  return (
    <button type="button" className={navStyles['nav-toggle']} onClick={onClick}>
      <span className={navStyles['nav-icon']}></span>
      <span className={navStyles['nav-icon']}></span>
      <span className={navStyles['nav-icon']}></span>
    </button>
  )
}

export default NavBurger
