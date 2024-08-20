import { z } from 'zod'

export const billingSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('update'),
  ]),
  z.literal('Billing'),
])

export type BillingSubject = z.infer<typeof billingSubject>
