import { FC, ReactNode } from 'react'

import styles from './Card.module.css'

type Props = {
  className?: string,
  children: ReactNode
}

const Card: FC<Props> = ({ className, children }) => (
  <div className={className ? `${styles.card} ${className}` : styles.card}>{children}</div>
)

export default Card
