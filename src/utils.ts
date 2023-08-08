import ERROR from './constants/errorsList.ts'

export const getErrorMessage = (validationResult: Record<'name' | 'age', boolean>) => {
  if (!validationResult.name && !validationResult.age) {
    return ERROR.INVALID_NAME_AND_AGE
  } else if (!validationResult.name) {
    return ERROR.INVALID_NAME
  } else if (!validationResult.age) {
    return ERROR.INVALID_AGE
  }
}
