import { auth } from '@/auth/auth'

export default async function Home() {
  const { user } = await auth()
  return <h1>{JSON.stringify(user, null, 2)}</h1>
}
