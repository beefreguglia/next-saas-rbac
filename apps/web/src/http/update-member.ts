import { Roles } from '@saas/auth'

import { api } from './api-client'

interface UpdateMemberRequest {
  org: string
  memberId: string
  role: Roles
}

export async function updateMember({
  org,
  memberId,
  role,
}: UpdateMemberRequest) {
  await api.put(`organizations/${org}/members/${memberId}`, {
    json: { role },
  })
}
