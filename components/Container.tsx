import { ReactNode } from 'react'
import { Props } from '../interfaces/index'

export const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>
}
