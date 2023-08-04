import { FC, ReactNode } from 'react'

import styles from './Button.module.css'

type Props = {
  children: ReactNode,
  buttonType?: 'button' | 'submit' | 'reset' | undefined,
}

const Button: FC<Props> = ({ children, buttonType = 'button' }) => (
  <button type={buttonType} className={styles.btn}>{children}</button>
)

export default Button
