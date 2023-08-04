import { FC } from 'react'

import styles from '../List.module.css'

type Props = {
  title: string,
  age: number
}

const ListItem: FC<Props> = ({ title, age }) => (
  <li className={`${styles.listItem}`}>{title} - {age} years</li>
)

export default ListItem
