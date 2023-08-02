import User from '../models/User.ts'

const usersList: User[] = [
  {
    id: crypto.randomUUID(),
    name: 'Kishor',
    age: 35
  },
  {
    id: crypto.randomUUID(),
    name: 'Kirill',
    age: 35
  },
  {
    id: crypto.randomUUID(),
    name: 'Some Guy',
    age: 30
  },
]

export default usersList
