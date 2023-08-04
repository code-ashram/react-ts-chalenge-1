import { FC } from 'react'

import User from '../../models/User.ts'
import ListItem from './parts/ListItem.tsx'

import Card from '../../UI/Card'

import styles from './List.module.css'

type Props = {
  listSource: User[]
}

const List: FC<Props> = ({ listSource }) => {

  return (
    <Card className={styles.listWrap}>
      <ul className={styles.list}>
        {listSource.map((listItem) => <ListItem key={listItem.id} title={listItem.name} age={listItem.age} />)}
      </ul>
    </Card>
  )
}

export default List
