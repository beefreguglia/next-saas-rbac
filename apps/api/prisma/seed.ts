import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  await prisma.project.deleteMany()
  await prisma.member.deleteMany()
  await prisma.organization.deleteMany()
  await prisma.user.deleteMany()
  const passwordHash = await hash('123456', 1)

  const user1 = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@acme.com',
      avatarUrl: 'https://github.com/beefreguglia.png',
      passwordHash,
    },
  })

  const user2 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatarGitHub(),
      passwordHash,
    },
  })

  const user3 = await prisma.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatarGitHub(),
      passwordHash,
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Acme Inc (ADMIN)',
      domain: 'acme.com',
      slug: 'acme-admin',
      avatarUrl: faker.image.avatarGitHub(),
      shouldAttachUsersByDomain: true,
      ownerId: user1.id,
      members: {
        createMany: {
          data: [
            { userId: user1.id, role: 'ADMIN' },
            { userId: user2.id, role: 'MEMBER' },
            { userId: user3.id, role: 'MEMBER' },
          ],
        },
      },
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
          ],
        },
      },
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Acme Inc (MEMBER)',
      slug: 'acme-member',
      avatarUrl: faker.image.avatarGitHub(),
      ownerId: user1.id,
      members: {
        createMany: {
          data: [
            { userId: user1.id, role: 'MEMBER' },
            { userId: user2.id, role: 'MEMBER' },
            { userId: user3.id, role: 'ADMIN' },
          ],
        },
      },
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
          ],
        },
      },
    },
  })

  await prisma.organization.create({
    data: {
      name: 'Acme Inc (BILLING)',
      slug: 'acme-billing',
      avatarUrl: faker.image.avatarGitHub(),
      ownerId: user1.id,
      members: {
        createMany: {
          data: [
            { userId: user1.id, role: 'BILLING' },
            { userId: user2.id, role: 'ADMIN' },
            { userId: user3.id, role: 'MEMBER' },
          ],
        },
      },
      projects: {
        createMany: {
          data: [
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
            {
              name: faker.lorem.words(5),
              slug: faker.lorem.slug(),
              avatarUrl: faker.image.avatarGitHub(),
              description: faker.lorem.paragraph(),
              ownerId: faker.helpers.arrayElement([
                user1.id,
                user2.id,
                user2.id,
              ]),
            },
          ],
        },
      },
    },
  })
}

seed().then(() => {
  console.log('Database seeded!')
})
