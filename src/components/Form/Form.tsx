import { FC, FormEvent } from 'react'

import Button from '../Button'

import './Form.css'

type Props = {
  onAddUser: () => void
}

const Form: FC<Props> = ({ onAddUser }) => {
  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault()
    onAddUser()
  }

  return (
    <form onSubmit={handleSubmitForm} className="form">
      <label htmlFor="userName" className="form__label">Name</label>
      <input id="userName" type="text" className="form__input" />

      <label htmlFor="userAge" className="form__label">Age</label>
      <input id="userAge" type="number" className="form__input" />

      <Button buttonType={"submit"}>Add user</Button>
    </form>
  )
}

export default Form
