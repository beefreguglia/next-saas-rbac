import { api } from './api-client'

interface RejectInviteRequest {
  inviteId: string
}

export async function rejectInvite({ inviteId }: RejectInviteRequest) {
  const result = await api.post(`invites/${inviteId}/reject`).json()

  return result
}
