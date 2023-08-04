
import Form from './components/Form'
import List from './components/List'
import usersList from './constants/usersList.ts'

import styles from './App.module.css'

function App() {
  const handleAddUser = () => console.log('User added!')

  return (
    <section className={styles.mainSection}>
        <Form onAddUser={handleAddUser}></Form>
        <List listSource={usersList} />
    </section>
  )
}

export default App
