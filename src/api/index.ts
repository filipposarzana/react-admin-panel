import { v4 } from 'uuid'
import { UpdatableUser, users } from '~/db'
import { findOneByName } from '~/utils/findOneBy'

export const create = (user: UpdatableUser) => {
  if (findOneByName(user.name)) {
    throw new Error(`User with name ${user.name} already exists`)
  }

  users.push({ ...user, uuid: v4() })

  return users
}

export const get = () => users

export const update = (uuid: string, updates: UpdatableUser) => {
  const userIndex = users.findIndex((user) => user.uuid === uuid)

  if (userIndex < 0) {
    throw new Error(`User with uuid ${uuid} does not exists`)
  }

  users[userIndex] = {
    ...users[userIndex],
    ...updates,
  }

  return users
}
