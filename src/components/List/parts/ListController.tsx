import { FC, useState } from 'react'

import SORT_BTN_ICO from '../../../constants/SortBtnIco.ts'
import Button from '../../Button'

import styles from '../List.module.css'

type Props = {
  onAddUser: () => void
  onClickLastWeek: () => void
  onClickToday: () => void
  onClickNextWeek: () => void
  onSortUsers: () => void
}

const ListController: FC<Props> = ({ onAddUser, onClickLastWeek, onClickToday, onClickNextWeek, onSortUsers }) => {

  const [sort, setSort] = useState<SORT_BTN_ICO>(SORT_BTN_ICO.UP)

  const handleChangeSort = () => {
    onSortUsers()
    setSort(sort === SORT_BTN_ICO.UP ? SORT_BTN_ICO.DOWN : SORT_BTN_ICO.UP)
  }

  return (
    <div className={styles.listController}>

      <div className={styles.listChanger}>
        <Button onClick={onAddUser} className={styles.listAddBtn}>Add User</Button>
        <Button className={styles.sortBtn} onClick={handleChangeSort}><>{sort}</></Button>
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
