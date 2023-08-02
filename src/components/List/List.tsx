import { FC } from 'react'

import './List.css'
import User from '../../models/User.ts'
import ListItem from './parts/ListItem.tsx'

type Props = {
  listSource: User[]
}

const List: FC<Props> = ({listSource}) => {

  return (
    <ul className="list">
      {listSource.map((listItem) => <ListItem key={listItem.id} title={listItem.name} age={listItem.age} />)}
    </ul>
  )
}

export default List
