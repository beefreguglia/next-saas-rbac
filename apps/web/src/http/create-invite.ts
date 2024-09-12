import { Roles } from '@saas/auth'

import { api } from './api-client'

interface CreateInviteRequest {
  email: string
  role: Roles
  org: string
}

export async function createInvite({ email, role, org }: CreateInviteRequest) {
  const result = await api
    .post(`organizations/${org}/invites`, {
      json: {
        email,
        role,
      },
    })
    .json()

  return result
}
