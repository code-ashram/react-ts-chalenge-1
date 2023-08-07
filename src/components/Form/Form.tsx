import { ChangeEvent, FC, FormEvent, useState } from 'react'

import User from '../../models/User.ts'
import ERROR from '../../constants/errorsList.ts'

import Card from '../../UI/Card'
import Button from '../Button'
import Modal from '../Modal'

import styles from './Form.module.css'

type Props = {
  onAddUser: (userData: User) => void
}

const Form: FC<Props> = ({ onAddUser }) => {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [errors, setErrors] = useState<string | boolean>('')
  const [validation, setValidation] = useState<Record<'name' | 'age', boolean>>({ age: true, name: true })

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setAge(Number(e.target.value))
  }

  const handleSubmitForm = (event: FormEvent): void => {
    event.preventDefault()

    const userData: User = {
      id: crypto.randomUUID(),
      name,
      age
    }

    if (age <= 0 && !name) {
      setErrors(ERROR.INVALID_NAME_AND_AGE)
      setValidation({name: false, age: false})
    } else if (age <= 0) {
      setErrors(ERROR.INVALID_AGE)
      setValidation({name: true, age: false})
    } else if (!name) {
      setErrors(ERROR.INVALID_NAME)
      setValidation({name: false, age: true})
    } else {
      onAddUser(userData)
      setValidation({name: true, age: true})
      setAge(0)
      setName('')
    }
  }

  const handleCloseModal = (): void => {
    setErrors(false)
  }

  return (
    <>
      {errors && <Modal modalText={errors} onCloseModal={handleCloseModal} />}
      <Card className={styles.formWrap}>
        <form className={styles.form} onSubmit={handleSubmitForm}>
          <label htmlFor="userName" className={styles.formLabel}>Name</label>
          <input id="userName"
                 type="text"
                 className={`${styles.formInput}${!validation.name ? ` ${styles.invalid}` : ''}`}
                 onChange={handleChangeName} value={name}
          />

          <label htmlFor="userAge" className={styles.formLabel}>Age</label>
          <input id="userAge"
                 type="number"
                 value={age}
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
