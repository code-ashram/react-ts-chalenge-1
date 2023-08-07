import { useState } from 'react'

import User from './models/User.ts'
import usersList from './constants/usersList.ts'
import Form from './components/Form'
import List from './components/List'
import Modal from './components/Modal'

import styles from './App.module.css'

function App () {
  const [usersDataBase, setUsersDataBase] = useState<User[]>(usersList)
  const [showModal, setShowModal] = useState<boolean>(true)

  const handleAddUser = (user: User) => {
    setUsersDataBase(prevDataBase => [user, ...prevDataBase])
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <section className={styles.mainSection}>
      {showModal && <Modal onCloseModal={handleCloseModal}/>}
      <Form onAddUser={handleAddUser} />
      <List listSource={usersDataBase} />
    </section>
  )
}

export default App
