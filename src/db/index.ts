export type BaseUser = {
  name: string
  uuid: string
}

export type User = BaseUser & {
  friends: BaseUser[]
}

export type UpdatableUser = Omit<User, 'uuid'>

export const users: User[] = []
