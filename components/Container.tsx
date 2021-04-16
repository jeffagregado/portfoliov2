import { ReactNode } from 'react'
import { Props } from '../interfaces/index'

export const Container = ({ children, className }: Props) => {
  return <div className={`container ${className}`}>{children}</div>
}
