import { useCallback } from 'react'
import { create } from '~/api'
import { maximumAllowedRetries, maximumAllowedRetriesError } from '~/constants/errors'
import { UpdatableUser, User } from '~/db'
import { shouldFailRandomly } from '~/utils/shouldFailRandomly'

export const useUserCreate = () => {
  const run = useCallback((user: UpdatableUser, count = 0): User[] => {
    if (count >= maximumAllowedRetries) {
      throw new Error(maximumAllowedRetriesError)
    }

    if (shouldFailRandomly()) {
      return run(user, count + 1)
    }

    return create(user)
  }, [])

  return run
}
