import { useCallback } from 'react'
import { Button } from '~/components/Button'

type Props = {
  onRemove: (uuid: string) => void
  uuid: string
}

export const UserListItemRemoveButton = ({ onRemove, uuid }: Props) => {
  const onClick = useCallback(() => onRemove(uuid), [onRemove, uuid])

  return (
    <Button onClick={onClick} type="button">
      Remove
    </Button>
  )
}
