import { ChangeEvent, FC, FormEvent, useState } from 'react'

import User from '../../models/User.ts'
import { getErrorMessage } from '../../utils.ts'
import Card from '../../UI/Card'
import Button from '../Button'
import Modal from '../Modal'

import styles from './Form.module.css'

type Props = {
  onAddUser: (userData: User) => void
}

type UserData = {
  name: string,
  age: number,
}

const Form: FC<Props> = ({ onAddUser }) => {
  const [user, setUser] = useState<UserData>({ name: '', age: 0 })
  const [validation, setValidation] = useState<Record<'name' | 'age', boolean>>({ age: true, name: true })
  const [showError, setShowError] = useState<boolean>(false)

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser(prevInput => ({
        ...prevInput,
        name: e.target.value
      })
    )

    if (!validation.name)
      setValidation(prevValidation => ({
          ...prevValidation,
          name: true
        })
      )
  }

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setUser(prevInput => ({
        ...prevInput,
        age: Number(e.target.value)
      })
    )

    if (Number(!validation.age))
      setValidation(prevValidation => ({
          ...prevValidation,
          age: true
        })
      )
  }

  const handleSubmitForm = (event: FormEvent): void => {
    event.preventDefault()

    const userData: User = {
      id: crypto.randomUUID(),
      name: user.name,
      age: user.age
    }

    if (!user.name || user.age <= 0)
      setShowError(true)


    if (!user.name && user.age <= 0) {
      setValidation({ name: false, age: false })
    } else if (user.name && user.age <= 0) {
      setValidation({ name: true, age: false })
    } else if (!user.name && user.age > 0) {
      setValidation({ name: false, age: true })
    } else {
      onAddUser(userData)
      setValidation({ name: true, age: true })
      setUser({
        age: Number(0),
        name: ''
      })
    }
  }

  const handleCloseModal = (): void => {
    setShowError(false)
  }

  return (
    <>
      {
        // (!validation.name || !validation.age) &&
        showError &&
        <Modal modalText={getErrorMessage(validation)} onCloseModal={handleCloseModal} />
      }
      <Card className={styles.formWrap}>
        <form className={styles.form} onSubmit={handleSubmitForm}>
          <label htmlFor="userName" className={styles.formLabel}>Name</label>
          <input id="userName"
                 type="text"
                 className={`${styles.formInput}${!validation.name ? ` ${styles.invalid}` : ''}`}
                 onChange={handleChangeName} value={user.name}
          />

          <label htmlFor="userAge" className={styles.formLabel}>Age</label>
          <input id="userAge"
                 type="number"
                 value={user.age}
                 className={`${styles.formInput}${!validation.age ? ` ${styles.invalid}` : ''}`}
                 onChange={handleChangeAge}
          />
          <Button buttonType={'submit'}>Add user</Button>
        </form>
      </Card>
    </>
  )
}

export default Form
