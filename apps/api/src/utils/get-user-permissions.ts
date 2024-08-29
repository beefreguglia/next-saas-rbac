import { defineAbilityFor, Roles, userSchema } from '@saas/auth'

export function getUserPermissions(userId: string, role: Roles) {
  const authUser = userSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilityFor(authUser)

  return ability
}
