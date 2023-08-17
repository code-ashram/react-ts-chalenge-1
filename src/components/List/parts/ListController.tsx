import { FC } from 'react'

import Button from '../../Button'

import styles from '../List.module.css'

type Props = {
  onAddUser: () => void
  onLastWeek: () => void
  onToday: () => void
  onNextWeek: () => void
}

const ListController: FC<Props> = ({ onAddUser, onLastWeek, onToday, onNextWeek }) => {
  const handleShowLastWeekList = () => {
    onLastWeek()
  }

  const handleShowNextWeekList = () => {
    onNextWeek()
  }

  return (
    <div className={styles.listController}>
      <div className={styles.listChanger}>
        <Button onClick={onAddUser} className={styles.listAddBtn}>Add User</Button>
      </div>
      <div className={styles.listSwitcher}>
        <Button onClick={handleShowLastWeekList}>Last Week</Button>
        <Button onClick={onToday}>Today</Button>
        <Button onClick={handleShowNextWeekList}>Next Week</Button>
      </div>
    </div>
  )
}

export default ListController
