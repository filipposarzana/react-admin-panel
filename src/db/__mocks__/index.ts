import { User } from '~/db'

export const users: User[] = [
  {
    friends: [
      {
        name: 'A Friend',
        uuid: 'acc82963-61c3-37ec-b334-e8f6bf6b7f57',
      },
    ],
    name: 'A User',
    uuid: '6bb0295f-8665-30a1-af76-6d1236b88971',
  },
  {
    friends: [],
    name: 'A User Friend',
    uuid: 'acc82963-61c3-37ec-b334-e8f6bf6b7f57',
  },
  {
    friends: [],
    name: 'A Friend of a Friend',
    uuid: '34e65f4b-188c-37e3-a73c-4e0f244df9eb',
  },
]
