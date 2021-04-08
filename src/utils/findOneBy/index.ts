import { User, users } from '~/db'

type Key = Extract<keyof User, 'name' | 'uuid'>

const findOneBy = <K extends Key>(prop: K) => (value: User[K]) =>
  users.find((user) => user[prop].toLowerCase() === value.toLowerCase())

export const findOneByName = findOneBy('name')

export const findOneByUuid = findOneBy('uuid')
