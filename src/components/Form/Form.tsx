import { ChangeEvent, FC, FormEvent, useState } from 'react'

import Button from '../Button'
import Modal from '../Modal'
import { getErrorMessage } from '../../utils.ts'
import User from '../../models/User.ts'

import styles from './Form.module.css'
import { addUser } from '../../api'

type Props = {
  onAddUser: (userData: User) => void
}

type UserData = {
  name: string,
  age: string,
}

const Form: FC<Props> = ({ onAddUser }) => {
  const [user, setUser] = useState<UserData>({ name: '', age: '' })
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
        age: e.target.value
      })
    )

    if (!validation.age)
      setValidation(prevValidation => ({
          ...prevValidation,
          age: true
        })
      )
  }

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault()

    const userData: Omit<User, 'id'> = {
      name: user.name,
      birthday: user.age
    }

    if (!user.name || !user.age)
      setShowError(true)

    if (!user.name && !user.age) {
      setValidation({ name: false, age: false })
    } else if (user.name && !user.age) {
      setValidation({ name: true, age: false })
    } else if (!user.name && user.age) {
      setValidation({ name: false, age: true })
    } else {
      const response = await addUser(new AbortController().signal, userData)

      if (response) {
        onAddUser(response)
        setValidation({ name: true, age: true })
        setUser({ age: '', name: '' })
      }
    }
  }

  const handleCloseModal = (): void => {
    setShowError(false)
  }

  return (
    <>
      {showError && (
        <Modal modalTitle={'Invalid Input!'} onCloseModal={handleCloseModal}>
          <p className={styles.formMessage}>{getErrorMessage(validation)}</p>
        </Modal>
      )}

      <form className={styles.form} onSubmit={handleSubmitForm}>
        <label htmlFor="userName" className={styles.formLabel}>Name</label>

        <input
          id="userName"
          type="text"
          className={`${styles.formInput}${!validation.name ? ` ${styles.invalid}` : ''}`}
          onChange={handleChangeName} value={user.name}
        />

        <label htmlFor="userAge" className={styles.formLabel}>DOB</label>

        <input
          id="userAge"
          type="date"
          className={`${styles.formInput}${!validation.age ? ` ${styles.invalid}` : ''}`}
          onChange={handleChangeAge}
        />

        <Button buttonType={'submit'} onClick={() => handleSubmitForm}>Add user</Button>
      </form>
    </>
  )
}

export default Form
