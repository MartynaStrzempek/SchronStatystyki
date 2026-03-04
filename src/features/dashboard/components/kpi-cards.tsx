import { KpiCard } from '@/shared/ui/kpi-card'
import { PawPrint, Home, Clock } from 'lucide-react'

const kpiCards = [
  {
    title: 'Zwierzęta obecnie',
    value: '126',
    change: 'Spadek o 3%',
    gradient:
      'linear-gradient(135deg, var(--primary) 0%, color-mix(in srgb, var(--primary), white 28%) 100%)',
    icon: <PawPrint className="text-white" />,
  },
  {
    title: 'Adopcje (30 dni)',
    value: '11',
    change: 'Wzrost o 18%',
    gradient:
      'linear-gradient(135deg, var(--tertiary) 0%, color-mix(in srgb, var(--tertiary), white 28%) 100%)',
    icon: <Home className="text-white" />,
  },
  {
    title: 'Średni czas pobytu',
    value: '95 dni',
    change: 'Spadek o 5%',
    gradient:
      'linear-gradient(135deg, var(--secondary) 0%, color-mix(in srgb, var(--secondary), white 28%) 100%)',
    icon: <Clock className="text-white" />,
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
