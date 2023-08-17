import { FC } from 'react'

import Button from '../../Button'

import styles from '../List.module.css'

type Props = {
  onAddUser: () => void
  onClickLastWeek: () => void
  onClickToday: () => void
  onClickNextWeek: () => void
}

const ListController: FC<Props> = ({ onAddUser, onClickLastWeek, onClickToday, onClickNextWeek }) => {

  return (
    <div className={styles.listController}>
      <div className={styles.listChanger}>
        <Button onClick={onAddUser} className={styles.listAddBtn}>Add User</Button>
      </div>
      <div className={styles.listSwitcher}>
        <Button onClick={onClickLastWeek}>Last Week</Button>
        <Button onClick={onClickToday}>Today</Button>
        <Button onClick={onClickNextWeek}>Next Week</Button>
      </div>
    </div>
  )
}

export default ListController
