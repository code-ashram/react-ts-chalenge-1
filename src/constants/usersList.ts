import User from '../models/User.ts'

const usersList: User[] = [
  {
    id: crypto.randomUUID(),
    name: 'Kishor',
    birthday: '1990-08-09'
  },
  {
    id: crypto.randomUUID(),
    name: 'Kirill',
    birthday: '1990-08-12'
  },
  {
    id: crypto.randomUUID(),
    name: 'Some Guy',
    birthday: '1992-08-19'
  },
  {
    id: crypto.randomUUID(),
    name: 'Warlock',
    birthday: '1994-08-19'
  },
  {
    id: crypto.randomUUID(),
    name: 'Marksman',
    birthday: '1996-08-19'
  },
  {
    id: crypto.randomUUID(),
    name: 'Vaishnava Thakur',
    birthday: '1998-08-21'
  },
  {
    id: crypto.randomUUID(),
    name: 'Your friend',
    birthday: '1999-08-22'
  },
  {
    id: crypto.randomUUID(),
    name: 'Berenica',
    birthday: '2001-08-23'
  },
]

export default usersList
