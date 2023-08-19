import ERROR from './constants/errorsList.ts'
import User from './models/User.ts'
import DATE_RANGE from './constants/dateRange.ts'

export const getErrorMessage = (validationResult: Record<'name' | 'age', boolean>) => {
  if (!validationResult.name && !validationResult.age) {
    return ERROR.INVALID_NAME_AND_AGE
  } else if (!validationResult.name) {
    return ERROR.INVALID_NAME
  } else if (!validationResult.age) {
    return ERROR.INVALID_AGE
  }
}

export const filterUsers = (users: User[], dateRange: DATE_RANGE) => {
  const today: number = new Date().setHours(0, 0, 0, 0)
  let start: number
  let end: number

  switch (dateRange) {
    case DATE_RANGE.PREV_WEEK:
      start = new Date(today).setDate(new Date(today).getDate() - 7)
      end = new Date(today).setDate(new Date(today).getDate() - 1)
      break
    case DATE_RANGE.TODAY:
      start = today
      end = today
      break
    case DATE_RANGE.NEXT_WEEK:
      start = new Date(today).setDate(new Date(today).getDate() + 1)
      end = new Date(today).setDate(new Date(today).getDate() + 7)
      break
  }

  return users.filter(({ birthday }) => {
      const currentBirthday = new Date(new Date(birthday).setFullYear(new Date().getFullYear())).setHours(0, 0, 0, 0)

      return start <= currentBirthday && currentBirthday <= end
    }
  )
}
