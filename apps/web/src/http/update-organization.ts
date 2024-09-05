import { api } from './api-client'

interface UpdateOrganizationRequest {
  org: string
  name: string
  domain: string | null
  shouldAttachUsersByDomain: boolean
}

type UpdateOrganizationResponse = void

export async function updateOrganization({
  org,
  domain,
  name,
  shouldAttachUsersByDomain,
}: UpdateOrganizationRequest) {
  const result = await api
    .put(`organizations/${org}`, {
      json: {
        domain,
        name,
        shouldAttachUsersByDomain,
      },
    })
    .json<UpdateOrganizationResponse>()

  return result
}
