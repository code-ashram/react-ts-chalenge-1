import User from '../models/User.ts'

const usersList: User[] = [
  {
    id: crypto.randomUUID(),
    name: 'Kishor',
    age: '1990-08-07'
  },
  {
    id: crypto.randomUUID(),
    name: 'Kirill',
    age: '1990-08-10'
  },
  {
    id: crypto.randomUUID(),
    name: 'Some Guy',
    age: '1992-08-13'
  },
  {
    id: crypto.randomUUID(),
    name: 'Warlock',
    age: '1994-08-16'
  },
  {
    id: crypto.randomUUID(),
    name: 'Marksman',
    age: '1996-08-16'
  },
  {
    id: crypto.randomUUID(),
    name: 'Vaishnava Thakur',
    age: '1998-08-21'
  },
  {
    id: crypto.randomUUID(),
    name: 'Your friend',
    age: '1999-08-24'
  },
  {
    id: crypto.randomUUID(),
    name: 'Berenica',
    age: '2001-08-27'
  },
]

export default usersList
