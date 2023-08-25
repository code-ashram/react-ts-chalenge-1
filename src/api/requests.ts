import User from '../models/User.ts'
import { get, post } from './methods.ts'
import { OrderDirection } from '../constants/OrderDirection.ts'

const BASE_URL = 'http://localhost:3000'

export const getUsers = async (signal: AbortSignal, orderDirection: OrderDirection, page: number, limit: number): Promise<User[]> =>
  get(signal, `${BASE_URL}/users?_sort=birthday&_order=${orderDirection}&_page=${page}&_limit=${limit}`)

export const addUser = async (signal: AbortSignal, user: Omit<User, 'id'>): Promise<User> =>
  post(signal, `${BASE_URL}/users`, user)
