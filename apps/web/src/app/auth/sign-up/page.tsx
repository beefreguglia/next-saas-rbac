import Image from 'next/image'
import Link from 'next/link'

import githubIcon from '@/assets/github-icon.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignUpPage() {
  return (
    <form className="space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name">Nome</Label>
        <Input type="text" name="name" id="name" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">E-mail</Label>
        <Input type="email" name="email" id="email" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input type="password" name="password" id="password" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="password_confirmation">Confirm your password</Label>
        <Input
          type="password"
          name="password_confirmation"
          id="password_confirmation"
        />
      </div>
      <Button type="submit" className="w-full">
        Create account
      </Button>
      <Button variant="link" className="w-full" asChild size="sm">
        <Link href="/auth/sign-in">Already registered? Sign in</Link>
      </Button>
      <Separator orientation="horizontal" />
      <Button variant="outline" className="w-full">
        <Image src={githubIcon} alt="" className="mr-2 size-4 dark:invert" />
        Sign up with Github
      </Button>
    </form>
  )
}
