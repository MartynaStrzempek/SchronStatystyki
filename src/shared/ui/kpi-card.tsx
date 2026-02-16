import type { ReactNode } from 'react'

type KpiCardProps = {
  title: string
  value: string
  change: string
  gradient: string
  icon: ReactNode
}

export function KpiCard({ title, value, change, gradient, icon }: KpiCardProps) {
  return (
    <article
      className="relative overflow-hidden rounded-xl p-10 text-white shadow-md"
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute -right-16 top-6 h-44 w-44 rounded-full bg-white/20" />
      <div className="absolute -bottom-16 right-2 h-40 w-40 rounded-full bg-white/16" />
      <div className="z-10">
        <div className="mb-5 flex justify-between">
          <p className="text-xl leading-none text-white/90">{title}</p>
          <span aria-hidden="true">{icon}</span>
        </div>
        <p className="mb-14 text-4xl font-bold leading-none">{value}</p>
        <p className="text-xl font-semibold leading-none text-white/90">{change}</p>
      </div>
    </article>
  )
}
