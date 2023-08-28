import { ChangeEvent, FC, useState } from 'react'

import SORT_BTN_ICO from '../../../constants/SortBtnIco.ts'
import Button from '../../Button'

import styles from '../List.module.css'

type Props = {
  onAddUser: () => void
  onClickLastWeek: () => void
  onClickToday: () => void
  onClickNextWeek: () => void
  onSortUsers: () => void
  value: number
  onChangeValue: (value: number) => void
}

const ListController: FC<Props> = ({
  onAddUser,
  onClickLastWeek,
  onClickToday,
  onClickNextWeek,
  onSortUsers,
  value,
  onChangeValue
}) => {

  const [sort, setSort] = useState<SORT_BTN_ICO>(SORT_BTN_ICO.UP)

  const handleChangeSort = () => {
    onSortUsers()
    setSort(sort === SORT_BTN_ICO.UP ? SORT_BTN_ICO.DOWN : SORT_BTN_ICO.UP)
  }

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue(Number(e.target.value))
  }

  return (
    <div className={styles.listController}>

      <div className={styles.listChanger}>
        <span>
          <label className={styles.usersAmountLabel} htmlFor="userAmount">Show users on page:</label>
          <input className={styles.usersAmount}
                 id="usersAmount"
                 type="number"
                 value={value}
                 step="1"
                 min="1"
                 onChange={handleChangeValue} />
        </span>

        <span>
         <Button onClick={onAddUser} className={styles.listAddBtn}>Add User</Button>

         <Button className={styles.sortBtn} onClick={handleChangeSort}>{sort}</Button>
        </span>
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
