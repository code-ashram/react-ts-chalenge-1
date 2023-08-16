import { useState } from 'react'

import User from './models/User.ts'
import usersList from './constants/usersList.ts'
import List from './components/List'

import styles from './App.module.css'

function App () {
  const [usersDataBase] = useState<User[]>(usersList)

  // const handleAddUser = (user: User) => {
  //   setUsersDataBase(prevDataBase => [user, ...prevDataBase])
  // }

  return (
    <section className={styles.mainSection}>
      <List listSource={usersDataBase} />
    </section>
  )
}

export default App
