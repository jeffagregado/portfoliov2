import { ReactNode } from 'react'
import { Props } from '../interfaces/index'

export const Container = ({ children, className, id }: Props) => {
  return (
    <div id={id} className={`container ${className ? className : ''}`}>
      {children}
    </div>
  )
}
