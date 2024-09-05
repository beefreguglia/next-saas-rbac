import { Roles } from '@saas/auth'

import { api } from './api-client'

interface GetMembershipRequest {
  org: string
}

interface GetMembershipResponse {
  membership: {
    id: string
    role: Roles
    organizationId: string
    userId: string
  }
}

export async function getMembership({ org }: GetMembershipRequest) {
  const result = await api
    .get(`organizations/${org}/membership`)
    .json<GetMembershipResponse>()

  return result
}
