import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from './index'

type Roles = 'ADMIN' | 'MEMBER'

type PermissionsByRole = (
  user: unknown,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Roles, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (_, { can }) => {
    can('invite', 'User')
  },
}
