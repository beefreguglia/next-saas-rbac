import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from './index'
import { Roles } from './roles'

type PermissionsByRole = (
  user: unknown,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Roles, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (_, { can }) => {
    can('get', 'User')
  },
  BILLING: (_, { can }) => {
    can('get', 'Project')
  },
}
