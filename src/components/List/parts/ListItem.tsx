import { FC } from 'react'

import styles from '../List.module.css'

type Props = {
  title: string,
  age: string
}

const ListItem: FC<Props> = ({ title, age }) => (
  <li className={`${styles.listItem}`}>{title} - {new Date().getFullYear() - new Date(age).getFullYear()} years</li>
)

export default ListItem
