import { useCallback } from 'react'
import { update } from '~/api'
import { maximumAllowedRetries, maximumAllowedRetriesError } from '~/constants/errors'
import { UpdatableUser, User } from '~/db'
import { shouldFailRandomly } from '~/utils/shouldFailRandomly'

export const useUserUpdate = () => {
  const run = useCallback((uuid: string, user: UpdatableUser, count = 0): User[] => {
    if (count >= maximumAllowedRetries) {
      throw new Error(maximumAllowedRetriesError)
    }

    if (shouldFailRandomly()) {
      return run(uuid, user, count + 1)
    }

    return update(uuid, user)
  }, [])

  return run
}
