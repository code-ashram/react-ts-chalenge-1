import { FC, MouseEventHandler, ReactNode } from 'react'

import styles from './Button.module.css'

type Props = {
  children: ReactNode,
  buttonType?: 'button' | 'submit' | 'reset' | undefined,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string
}

const Button: FC<Props> = ({ children, buttonType = 'button', onClick, className }) => (
  <button type={buttonType} className={className ? `${styles.btn} ${className}` : styles.btn} onClick={onClick}>{children}</button>
)

export default Button
