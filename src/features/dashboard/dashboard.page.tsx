import { Button } from '@/components/ui/button'

export function DashboardPage() {
  return (
    <section>
      <h1>Dashboard</h1>
      <Button>Dodaj rekord</Button>
      <Button variant={'secondary'}>Dodaj rekord</Button>
      <Button variant={'outline'}>Dodaj rekord</Button>
      <Button variant={'ghost'}>Dodaj rekord</Button>
      <div>
        <div>kafelek</div>
        <div>kafelek</div>
        <div>kafelek</div>
      </div>
      <div>
        <div>wykres</div>
        <div>wykres</div>
        <div>wykres</div>
      </div>
    </section>
  )
}
