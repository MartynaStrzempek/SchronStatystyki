import { KpiCard } from '@/shared/ui/kpi-card'

const kpiCards = [
  {
    title: 'Zwierzęta obecnie',
    value: '126',
    change: 'Spadek o 3%',
    gradient:
      'linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary), white 28%) 100%)',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white/90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="7.2" cy="8.4" r="1.35" />
        <circle cx="10.3" cy="6.9" r="1.35" />
        <circle cx="13.7" cy="6.9" r="1.35" />
        <circle cx="16.8" cy="8.4" r="1.35" />
        <path d="M8 14.8c0-2.1 1.8-3.6 4-3.6s4 1.5 4 3.6-1.8 3.8-4 3.8-4-1.7-4-3.8Z" />
      </svg>
    ),
  },
  {
    title: 'Adopcje (30 dni)',
    value: '11',
    change: 'Wzrost o 18%',
    gradient:
      'linear-gradient(135deg, var(--tertiary) 0%, color-mix(in srgb, var(--tertiary), white 28%) 100%)',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white/90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Średni czas pobytu',
    value: '95 dni',
    change: 'Spadek o 5%',
    gradient:
      'linear-gradient(135deg, var(--secondary) 0%, color-mix(in srgb, var(--secondary), white 28%) 100%)',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 text-white/90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
]

export function KpiCards() {
  return (
    <>
      {kpiCards.map((card) => (
        <KpiCard
          key={card.title}
          title={card.title}
          value={card.value}
          change={card.change}
          gradient={card.gradient}
          icon={card.icon}
        />
      ))}
    </>
  )
}
