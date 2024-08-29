import { defineAbilityFor, Roles, userSchema } from '@saas/auth'

export function getUserPermissions(userId: string, role: Roles) {
  const authUser = userSchema.parse({
    userId,
    role,
  })
  return defineAbilityFor(authUser)
}
