import { FC, useState } from 'react'

import Button from '../../Button'

import styles from '../List.module.css'

type Props = {
  onAddUser: () => void
  onClickLastWeek: () => void
  onClickToday: () => void
  onClickNextWeek: () => void
  onSortUsers: () => void
}

const UP = <>&#129093;</>;
const DOWN = <>&#129095;</>;

const ListController: FC<Props> = ({ onAddUser, onClickLastWeek, onClickToday, onClickNextWeek, onSortUsers }) => {

  const [sort, setSort] = useState(UP)

  const handleChangeSort = () => {
    onSortUsers()
    setSort(sort === UP ? DOWN : UP)
  }

  return (
    <div className={styles.listController}>

      <div className={styles.listChanger}>
        <Button onClick={onAddUser} className={styles.listAddBtn}>Add User</Button>
        <Button className={styles.sortBtn} onClick={handleChangeSort}>{sort}</Button>
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
