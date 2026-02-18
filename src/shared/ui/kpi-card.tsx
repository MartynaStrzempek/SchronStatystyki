import type { ReactNode } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type KpiCardProps = {
  title: string
  value: string
  change: string
  gradient: string
  icon: ReactNode
}

export function KpiCard({ title, value, change, gradient, icon }: KpiCardProps) {
  return (
    <Card
      className="relative overflow-hidden"
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute -right-16 top-6 h-44 w-44 rounded-full bg-white/20" />
      <div className="absolute -bottom-16 right-2 h-40 w-40 rounded-full bg-white/16" />
      <div className="z-10">
        <CardHeader className="mb-5 flex justify-between">
          <p className="text-xl leading-none text-white/90">{title}</p>
          <span aria-hidden="true">{icon}</span>
        </CardHeader>
        <CardContent>
          <p className="mb-14 text-4xl font-bold leading-none text-white">{value}</p>
          <p className="text-xl font-semibold leading-none text-white/90">{change}</p>
        </CardContent>
      </div>
    </Card>
  )
}
