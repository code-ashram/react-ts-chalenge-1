import { FC, useState } from 'react'

import Card from '../../UI/Card'
import User from '../../models/User.ts'
import ListController from './parts/ListController.tsx'
import ListItem from './parts/ListItem.tsx'
import Form from '../Form'
import Modal from '../Modal'

import styles from './List.module.css'

type Props = {
  listSource: User[]
}

const List: FC<Props> = ({listSource}) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [usersDataBase, setUsersDataBase] = useState<User[]>(listSource)

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  const handleAddUser = (user: User) => {
    setUsersDataBase(prevDataBase => [user, ...prevDataBase])
    handleToggleForm()
  }

  const handleShowTodayList = () => {
    // setUsersDataBase(usersDataBase.filter((user) =>
    //   new Date(user.age).getDate() && new Date(user.age).getMonth() === new Date().getDate() && new Date().getMonth())
    // )
    console.log(new Date(usersDataBase[1].age).getMonth())
  }

  return (
    <>
      {showForm &&
        <Modal modalTitle={'Enter user data'} onCloseModal={handleToggleForm}>
          <Form onAddUser={handleAddUser}></Form>
        </Modal>}
      <Card className={styles.listWrap}>
        <ListController
          onAddUser={handleToggleForm}
          onClickLastWeek={() => console.log('You check last week list')}
          onClickToday={handleShowTodayList}
          onClickNextWeek={() => console.log('You check next week list')} />
        <ul className={styles.list}>
          {usersDataBase.map((listItem) => <ListItem key={listItem.id} title={listItem.name} age={listItem.age} />)}
        </ul>
      </Card>
    </>
  )
}

export default List
