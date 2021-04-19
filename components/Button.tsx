import { Props } from '../interfaces/index'
import btnStyle from '../styles/Button.module.scss'

interface BtnProps extends Props {
    href: string
}

const Button = ({ children, href }: BtnProps) => {
  return <button className={`${btnStyle.btn}`}><a href={href} target="_blank">{children}</a></button>
}

export default Button
