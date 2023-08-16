import { FC, useState } from 'react'

import Card from '../../UI/Card'
import User from '../../models/User.ts'
import ListController from './parts/ListController.tsx'
import ListItem from './parts/ListItem.tsx'
import Form from '../Form'
import Modal from '../Modal'

import styles from './List.module.css'
import usersList from '../../constants/usersList.ts'

// type Props = {
//   listSource: User[]
// }

const List: FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [usersDataBase, setUsersDataBase] = useState<User[]>(usersList)

  const handleOpenForm = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const handleAddUser = (user: User) => {
    setUsersDataBase(prevDataBase => [user, ...prevDataBase])
    handleCloseForm()
  }

  return (
    <>
      {showForm &&
        <Modal modalTitle={'Enter user data'} onCloseModal={handleCloseForm}>
          <Form onAddUser={handleAddUser}></Form>
        </Modal>}
      <Card className={styles.listWrap}>
        <ListController
          onAddUser={handleOpenForm}
          onLastWeek={() => console.log('You check last week list')}
          onToday={() => console.log('You check today list')}
          onNextWeek={() => console.log('You check next week list')} />
        <ul className={styles.list}>
          {usersDataBase.map((listItem) => <ListItem key={listItem.id} title={listItem.name} age={listItem.age} />)}
        </ul>
      </Card>
    </>
  )
}

export default List
