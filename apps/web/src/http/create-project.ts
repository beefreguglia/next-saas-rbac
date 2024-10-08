import { api } from './api-client'

interface CreateProjectRequest {
  name: string
  description: string
  org: string
}

export async function createProject({
  description,
  name,
  org,
}: CreateProjectRequest) {
  const result = await api
    .post(`organizations/${org}/projects`, {
      json: {
        description,
        name,
      },
    })
    .json()

  return result
}
