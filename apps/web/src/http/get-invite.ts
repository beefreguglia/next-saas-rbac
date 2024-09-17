import { Roles } from '@saas/auth'

import { api } from './api-client'

interface GetInviteResponse {
  invite: {
    id: string
    role: Roles
    email: string
    createdAt: string
    organization: {
      name: string
    }
    author: {
      id: string
      name: string | null
      avatarUrl: string | null
    } | null
  }
}

export async function getInvite(id: string) {
  const result = await api.get(`invites/${id}`).json<GetInviteResponse>()

  return result
}
