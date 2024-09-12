'use server'

import { Roles } from '@saas/auth'
import { revalidateTag } from 'next/cache'

import { getCurrentOrg } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'
import { updateMember } from '@/http/update-member'

export async function removeMemberAction(memberId: string) {
  const currentOrg = getCurrentOrg()

  await removeMember({
    memberId,
    org: currentOrg!,
  })

  revalidateTag(`${currentOrg}/members`)
}

export async function updateMemberAction(memberId: string, role: Roles) {
  const currentOrg = getCurrentOrg()

  await updateMember({
    memberId,
    org: currentOrg!,
    role,
  })

  revalidateTag(`${currentOrg}/members`)
}
