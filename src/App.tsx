import List from './components/List'

import styles from './App.module.css'
import usersList from './constants/usersList.ts'

function App () {

  return (
    <section className={styles.mainSection}>
      <List listSource={usersList}/>
    </section>
  )
}

export default App
