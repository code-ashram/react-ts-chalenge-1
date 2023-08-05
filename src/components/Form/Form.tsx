import { ChangeEvent, FC, FormEvent, useState } from 'react'

import User from '../../models/User.ts'

import Card from '../../UI/Card'
import Button from '../Button'

import styles from './Form.module.css'

type Props = {
  onAddUser: (userData: User) => void
}

const Form: FC<Props> = ({ onAddUser }) => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setAge(Number(e.target.value))
  }

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault()

    const userData: User = {
      id: crypto.randomUUID(),
      name,
      age,
    }

    onAddUser(userData)

    setAge(0)
    setName('')
  }

  return (
    <Card className={styles.formWrap}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <label htmlFor="userName" className={styles.formLabel}>Name</label>
        <input id="userName"
               type="text"
               className={styles.formInput}
               onChange={handleChangeName} value={name}
        />

        <label htmlFor="userAge" className={styles.formLabel}>Age</label>
        <input id="userAge"
               type="number"
               value={age}
               className={styles.formInput}
               onChange={handleChangeAge}
        />
        <Button buttonType={'submit'}>Add user</Button>
      </form>
    </Card>
  )
}

export default Form
