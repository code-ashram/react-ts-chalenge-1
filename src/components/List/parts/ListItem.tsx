import { FC } from 'react'

import '../List.css'

type Props = {
  title: string,
  age: number
}

const ListItem: FC<Props> = ({ title, age }) => (
  <li className="list__item">{title} - {age} years</li>
)

export default ListItem
