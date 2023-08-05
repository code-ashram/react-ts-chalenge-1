
import Form from './components/Form'
import List from './components/List'
import usersList from './constants/usersList.ts'

import styles from './App.module.css'
import { useState } from 'react'
import User from './models/User.ts'

function App() {
  const [usersDataBase, setUsersDataBase] = useState<User[]>(usersList)
  const handleAddUser = (user: User) => {
    setUsersDataBase(prevDataBase => [user, ...prevDataBase, ])
  }

  return (
    <section className={styles.mainSection}>
        <Form onAddUser={handleAddUser}></Form>
        <List listSource={usersDataBase} />
    </section>
  )
}

export default App
