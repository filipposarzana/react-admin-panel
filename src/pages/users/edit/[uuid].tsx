import Error from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { UpdatePage } from '~/components/Page/Update'
import { findOneByUuid } from '~/utils/findOneBy'

const DetailUser = () => {
  const { query } = useRouter()
  const { replace } = useRouter()

  const user = findOneByUuid(String(query.uuid))

  const onCreated = useCallback(() => replace('/'), [replace])

  if (!user) {
    return <Error statusCode={404} title="User not found" />
  }

  return (
    <>
      <Head>
        <title key="title">{user.name} - Admin</title>
      </Head>

      <UpdatePage index={0} onCreated={onCreated} user={user} />
    </>
  )
}

export default DetailUser
