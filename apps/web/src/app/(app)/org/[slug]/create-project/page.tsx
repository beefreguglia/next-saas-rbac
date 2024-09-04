import { Header } from '@/components/header'

import { ProjectForm } from './project-form'

export default async function CreateProject() {
  return (
    <div className="space-y-4 py-4">
      <Header />
      <main className="mx-auto w-full max-w-[1200px]">
        <ProjectForm />
      </main>
    </div>
  )
}
