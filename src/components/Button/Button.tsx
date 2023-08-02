import { FC, ReactNode } from 'react'

import './Button.css'

type Props = {
  children: ReactNode,
  buttonType?: 'button' | 'submit' | 'reset' | undefined,
}

const Button: FC<Props> = ({ children, buttonType = 'button' }) => (
  <button type={buttonType} className="btn">{children}</button>
)

export default Button
