import { FC, useEffect, useState } from 'react'

import ListController from './parts/ListController.tsx'
import ListItem from './parts/ListItem.tsx'
import Form from '../Form'
import Modal from '../Modal'
import Card from '../../UI/Card'
import DATE_RANGE from '../../constants/dateRange.ts'
import { filterUsers } from '../../utils.ts'
import User from '../../models/User.ts'
import { getUsers } from '../../api'
import { OrderDirection } from '../../constants/OrderDirection.ts'

import styles from './List.module.css'
import Button from '../Button'
import Loader from '../Loader'

const List: FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false)
  const [users, setUsers] = useState<User[] | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [orderDirection, setOrderDirection] = useState<OrderDirection>(OrderDirection.asc)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState<number>(5)
  const [showMoreButton, setShowMoreButton] = useState<boolean>(true)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    setIsLoading(true)

    getUsers(signal, orderDirection, page, limit)
      .then((response) => {
        setShowMoreButton(response?.length === limit)
        setUsers((prevUsers) => prevUsers?.length ? [...prevUsers, ...response] : response)
      })
      .finally(() => setIsLoading(false))

    return () => {
      controller.abort()
    }
  }, [orderDirection, page, limit])

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  const handleAddUser = (user: User) => {
    setUsers(prevUsers => prevUsers ? [user, ...prevUsers] : [user])
    handleToggleForm()
  }

  const handleShowLastWeekBirthday = () => {
    setUsers(filterUsers(users ?? [], DATE_RANGE.PREV_WEEK))
  }

  const handleShowTodayBirthday = () => {
    setUsers(filterUsers(users ?? [], DATE_RANGE.TODAY))
  }

  const handleShowNextWeekBirthday = () => {
    setUsers(filterUsers(users ?? [], DATE_RANGE.NEXT_WEEK))
  }

  const handleToggleSort = () => {
    setUsers(null)
    setOrderDirection(prevOrder => prevOrder === OrderDirection.asc ? OrderDirection.desc : OrderDirection.asc)
  }

  const handleChangeUsersCount = (value: number) => {
    setUsers(null)
    setLimit(value)
  }

  const handleShowMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  return (
    <>
      {showForm && (
        <Modal modalTitle={'Enter user data'} onCloseModal={handleToggleForm}>
          <Form onAddUser={handleAddUser} />
        </Modal>
      )}

      <Card className={styles.listWrap}>
        <ListController
          onAddUser={handleToggleForm}
          value={limit}
          onChangeValue={handleChangeUsersCount}
          onClickLastWeek={handleShowLastWeekBirthday}
          onClickToday={handleShowTodayBirthday}
          onClickNextWeek={handleShowNextWeekBirthday}
          onSortUsers={handleToggleSort}
        />

        <ul className={styles.list}>
          {!!users?.length && users.map(({ id, name, birthday }) =>
            <ListItem key={id} title={name} age={birthday} />
          )}
        </ul>

        {isLoading && (
          <Loader count={limit} />
        )}

        {showMoreButton && (
          <Button className={styles.loadMoreBtn} onClick={handleShowMore}>Load More</Button>
        )}
      </Card>
    </>
  )
}

export default List
