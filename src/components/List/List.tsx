import { FC, useState } from 'react'

import Card from '../../UI/Card'
import User from '../../models/User.ts'
import ListController from './parts/ListController.tsx'
import ListItem from './parts/ListItem.tsx'

import styles from './List.module.css'
import Modal from '../Modal'
import Error from '../../constants/errorsList.ts'

type Props = {
  listSource: User[]
}

const List: FC<Props> = ({ listSource }) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const handleOpenForm = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }


  return (
    <>
      {showForm && <Modal modalText={Error.INVALID_AGE} onCloseModal={handleCloseForm}/>}
      <Card className={styles.listWrap}>
        <ListController
          onAddUser={handleOpenForm}
          onLastWeek={() => console.log('You check last week list')}
          onToday={() => console.log('You check today list')}
          onNextWeek={() => console.log('You check next week list')} />
        <ul className={styles.list}>
          {listSource.map((listItem) => <ListItem key={listItem.id} title={listItem.name} age={listItem.age} />)}
        </ul>
      </Card>
    </>
  )
}

export default List
