import { ChangeEvent, FC, FormEvent, useState } from 'react'

import User from '../../models/User.ts'
import Error from '../../constants/errorsList.ts'

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
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState('')

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
      setModalMessage(Error.E1)
      setShowModal(true)
    } else if (age <= 0) {
      setModalMessage(Error.E2)
      setShowModal(true)
    } else if (!name) {
      setModalMessage(Error.E3)
      setShowModal(true)
    } else {
      setAge(0)
      setName('')
      onAddUser(userData)
    }
  }

  const handleCloseModal = (): void => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && <Modal modalText={modalMessage} onCloseModal={handleCloseModal} />}
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
    </>

  )
}

export default Form
