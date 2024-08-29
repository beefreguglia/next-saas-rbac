import { projectSchema } from '@saas/auth'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { UnauthorizedError } from '@/http/_errors/unauthorized-error'
import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'
import { getUserPermissions } from '@/utils/get-user-permissions'

export async function updateProject(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .put(
      '/organizations/:slug/projects/:projectId',
      {
        schema: {
          tags: ['Projects'],
          summary: 'Delete project',
          security: [{ bearerAuth: [] }],
          params: z.object({
            slug: z.string(),
            projectId: z.string().uuid(),
          }),
          body: z.object({
            name: z.string(),
            description: z.string(),
          }),
          response: {
            204: z.null(),
          },
        },
      },

      async (request, reply) => {
        const { slug, projectId } = request.params
        const userId = await request.getCurrentUserId()
        const { organization, membership } =
          await request.getUserMembership(slug)

        const project = await prisma.project.findUnique({
          where: {
            id: projectId,
            organizationId: organization.id,
          },
        })

        if (!project) {
          throw new UnauthorizedError('Project not found.')
        }

        const authProject = projectSchema.parse(project)

        const { cannot } = getUserPermissions(userId, membership.role)

        if (cannot('update', authProject)) {
          throw new UnauthorizedError(
            `You're not allowed to update this project.`,
          )
        }

        const { name, description } = request.body

        await prisma.project.update({
          where: {
            id: projectId,
            organizationId: organization.id,
          },
          data: {
            name,
            description,
          },
        })

        return reply.status(204).send()
      },
    )
}
