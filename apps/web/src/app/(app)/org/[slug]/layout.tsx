import { Header } from '@/components/header'
import { Tabs } from '@/components/tabs'

export default function OrgLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <div className="pt-6">
        <Header />
        <Tabs />
      </div>
      <main className="m-w-[1200px] mx-auto w-full py-4">{children}</main>
    </div>
  )
}
