'use server'

import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignInURL = new URL('login/oauth/authorize', 'http://github.com')

  githubSignInURL.searchParams.set('client_id', 'c7c73e1db925269730c4')
  githubSignInURL.searchParams.set(
    'redirect_uri',
    'http://localhost:3000/api/auth/callback',
  )
  githubSignInURL.searchParams.set('scope', 'user')

  redirect(githubSignInURL.toString())
}
