import { api } from './api-client'

interface GetProjectsResponse {
  projects: {
    id: string
    name: string | null
    slug: string
    description: string
    avatarUrl: string | null
    organizationId: string
    ownerId: string
    createdAt: string
    owner: {
      id: string
      name: string | null
      avatarUrl: string | null
    }
  }[]
}

export async function getProjects(org: string) {
  const result = await api
    .get(`organizations/${org}/projects`, {
      next: {
        tags: [`${org}/projects`],
      },
    })
    .json<GetProjectsResponse>()

  return result
}
