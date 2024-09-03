import { api } from './api-client'

interface CreateOrganizationRequest {
  name: string
  domain: string | null
  shouldAttachUsersByDomain: boolean
}

interface CreateOrganizationResponse {
  token: string
}

export async function createOrganization({
  domain,
  name,
  shouldAttachUsersByDomain,
}: CreateOrganizationRequest) {
  const result = await api
    .post('organizations', {
      json: {
        domain,
        name,
        shouldAttachUsersByDomain,
      },
    })
    .json<CreateOrganizationResponse>()

  return result
}
