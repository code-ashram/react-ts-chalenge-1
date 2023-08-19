import { FC, useState } from 'react'

import Card from '../../UI/Card'
import User from '../../models/User.ts'
import ListController from './parts/ListController.tsx'
import ListItem from './parts/ListItem.tsx'
import Form from '../Form'
import Modal from '../Modal'

import styles from './List.module.css'
import DATE_RANGE from '../../constants/dateRange.ts'
import { filterUsers } from '../../utils.ts'

type Props = {
  listSource: User[]
}

const List: FC<Props> = ({ listSource }) => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [usersDataBase, setUsersDataBase] = useState<User[]>(listSource)

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  const handleAddUser = (user: User) => {
    setUsersDataBase(prevDataBase => [user, ...prevDataBase])
    handleToggleForm()
  }

  const handleShowLastWeekBirthday = () => {
    setUsersDataBase(filterUsers(usersDataBase, DATE_RANGE.PREV_WEEK))
  }

  const handleShowTodayBirthday = () => {
    setUsersDataBase(filterUsers(usersDataBase, DATE_RANGE.TODAY))
  }

  const handleShowNextWeekBirthday = () => {
    setUsersDataBase(filterUsers(usersDataBase, DATE_RANGE.NEXT_WEEK))
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
          onClickLastWeek={() => handleShowLastWeekBirthday}
          onClickToday={() => handleShowTodayBirthday}
          onClickNextWeek={() => handleShowNextWeekBirthday} />
        <ul className={styles.list}>
          {usersDataBase.map(({ id, name, birthday }) => <ListItem key={id} title={name} age={birthday} />)}
        </ul>
      </Card>
    </>
  )
}

export default List
