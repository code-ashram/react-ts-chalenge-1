import { FC } from 'react'

import List from './components/List'

import styles from './App.module.css'

const App: FC = () => (
  <section className={styles.mainSection}>
    <List />
  </section>
)

export default App
