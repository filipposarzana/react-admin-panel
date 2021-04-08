import Head from 'next/head'
import { get } from '~/api'
import { SectionBody } from '~/components/Section/Body'
import { SectionEmptyState } from '~/components/Section/EmptyState'
import { SectionHeader } from '~/components/Section/Header'
import { SectionHeaderLink } from '~/components/Section/HeaderLink'
import { SectionHeaderTitle } from '~/components/Section/HeaderTitle'
import { SectionMain } from '~/components/Section/Main'
import { UserList } from '~/components/UserList'

const Home = () => {
  const users = get()

  return (
    <>
      <Head>
        <title key="title">Home - Admin</title>
      </Head>

      <SectionMain>
        <SectionHeader>
          <SectionHeaderTitle title="Users" />
          <SectionHeaderLink href="/users/create" text="New user" />
        </SectionHeader>

        <SectionBody>
          <UserList users={users} />

          <SectionEmptyState list={users} message="No users" />
        </SectionBody>
      </SectionMain>
    </>
  )
}

export default Home
