import { Roles } from '@saas/auth'

import { api } from './api-client'

interface GetMembersRequest {
  org: string
}

interface GetMembersResponse {
  members: {
    id: string
    userId: string
    role: Roles
    email: string
    name: string | null
    slug: string
    avatarUrl: string | null
  }[]
}

export async function getMembers({ org }: GetMembersRequest) {
  const result = await api
    .get(`organizations/${org}/members`, {
      next: {
        tags: ['members'],
      },
    })
    .json<GetMembersResponse>()

  return result
}
