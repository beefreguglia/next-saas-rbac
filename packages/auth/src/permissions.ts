import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from './index'
import { User } from './models/user'
import { Roles } from './roles'

type PermissionsByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>,
) => void

export const permissions: Record<Roles, PermissionsByRole> = {
  ADMIN: (_, { can }) => {
    can('manage', 'all')
  },
  MEMBER: (user, { can }) => {
    can('delete', 'Organization', { ownerId: { $eq: user.id } })
    can('get', 'User')
    can(['update', 'delete'], 'Project', { ownerId: { $eq: user.id } })
  },
  BILLING: (_, { can }) => {
    can('get', 'Project')
  },
}
