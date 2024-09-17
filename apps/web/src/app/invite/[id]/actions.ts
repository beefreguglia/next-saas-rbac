'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { acceptInvite } from '@/http/accept-invite'

export async function signInFromInvite(inviteId: string, inviteEmail: string) {
  cookies().set('inviteId', inviteId)
  redirect(`/auth/sign-in?email=${inviteEmail}`)
}

export async function acceptInviteAction(inviteId: string) {
  await acceptInvite({ inviteId })
  redirect('/')
}
