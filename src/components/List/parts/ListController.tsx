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

  const handleAddUser = () => {
    onAddUser()
  }

  const handleShowLastWeekList = () => {
    onLastWeek()
  }

  const handleShowTodayList = () => {
    onToday()
  }

  const handleShowNextWeekList = () => {
    onNextWeek()
  }

  return (
    <div className={styles.listController}>
      <div className={styles.listChanger}>
        <Button onClick={handleAddUser} className={styles.listAddBtn}>Add User</Button>
      </div>
      <div className={styles.listSwitcher}>
        <Button onClick={handleShowLastWeekList}>Last Week</Button>
        <Button onClick={handleShowTodayList}>Today</Button>
        <Button onClick={handleShowNextWeekList}>Next Week</Button>
      </div>
    </div>
  )
}

export default ListController
