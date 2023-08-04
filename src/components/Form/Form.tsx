import { FC, FormEvent } from 'react'

import Card from '../../UI/Card'
import Button from '../Button'

import styles from './Form.module.css'

type Props = {
  onAddUser: () => void
}

const Form: FC<Props> = ({ onAddUser }) => {
  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault()
    onAddUser()
  }

  return (
    <Card className={styles.formWrap}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <label htmlFor="userName" className={styles.formLabel}>Name</label>
        <input id="userName" type="text" className={styles.formInput} />

        <label htmlFor="userAge" className={styles.formLabel}>Age</label>
        <input id="userAge" type="number" className={styles.formInput} />

        <Button buttonType={'submit'}>Add user</Button>
      </form>
    </Card>

  )
}

export default Form
