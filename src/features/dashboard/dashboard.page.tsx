import { AdoptionsInMonthBarChart } from '@/features/dashboard/components/adoptions-in-month-bar-chart'
import { AnimalTypesPieChart } from '@/features/dashboard/components/animal-types-pie-chart'
import { KpiCards } from '@/features/dashboard/components/kpi-cards'
import { useAnimals } from '../animals/hooks/useAnimals'
import { RefetchCard } from '@/shared/ui/refetch-card'

export function DashboardPage() {
  const { error, refetch, isFetching } = useAnimals()

  const pageTitle = 'Dashboard'

  return (
    <section>
      <div>
        <div className="page-title">{pageTitle}</div>
      </div>
      <div className="mb-10">
        {error && <RefetchCard error={error} isFetching={isFetching} refetch={refetch} />}
      </div>
      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <KpiCards />
      </div>
      <div className="grid xl:grid-cols-[0.65fr_0.35fr] md:grid-cols-1 gap-10">
        <AdoptionsInMonthBarChart />
        <AnimalTypesPieChart />
      </div>
    </section>
  )
}
