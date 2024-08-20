import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanInviteProject = ability.can('manage', 'Project')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

console.log(
  userCanInviteSomeoneElse,
  userCanDeleteOtherUsers,
  userCanInviteProject,
)
