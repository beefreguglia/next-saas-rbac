import { api } from './api-client'

interface AcceptInviteRequest {
  inviteId: string
}

export async function acceptInvite({ inviteId }: AcceptInviteRequest) {
  const result = await api.post(`invites/${inviteId}/accept`).json()

  return result
}
