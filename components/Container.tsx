interface Props {
  children: any
}

export const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>
}
