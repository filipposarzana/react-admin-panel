import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import { CreatePage } from '~/components/Page/Create'

const CreateUser = () => {
  const { replace } = useRouter()

  const onCreated = useCallback(() => replace('/'), [replace])

  return (
    <>
      <Head>
        <title key="title">Create user - Admin</title>
      </Head>

      <CreatePage index={0} onCreated={onCreated} />
    </>
  )
}

export default CreateUser
