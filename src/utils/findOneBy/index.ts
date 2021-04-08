import { User, users } from '~/db'

const findOneBy = <K extends keyof User>(prop: K) => (value: User[K]) => users.find((user) => user[prop] === value)

export const findOneByName = findOneBy('name')

export const findOneByUuid = findOneBy('uuid')
