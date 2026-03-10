import { AdoptionsInMonthBarChart } from '@/features/dashboard/components/adoptions-in-month-bar-chart'
import { AnimalTypesPieChart } from '@/features/dashboard/components/animal-types-pie-chart'
import { KpiCards } from '@/features/dashboard/components/kpi-cards'
import { useAnimals } from '../animals/hooks/useAnimals'
import { RefetchCard } from '@/shared/ui/refetch-card'
import { useEffect } from 'react'
import { KpiCardsPlaceholder } from './components/kpi-cards-placeholder'
import { Skeleton } from '@/components/ui/skeleton'

export function DashboardPage() {
  const { data, isLoading, error, refetch, isFetching } = useAnimals()

  const pageTitle = 'Dashboard'

  useEffect(() => {
    if (!data) return
    console.log('data', data)
  }, [data])

  return (
    <section>
      <div>
        <div className="page-title">{pageTitle}</div>
      </div>
      <div className="mb-10">
        {error && <RefetchCard error={error} isFetching={isFetching} refetch={refetch} />}
      </div>
      <div className="mb-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {isLoading ? <KpiCardsPlaceholder /> : <KpiCards />}
      </div>
      <div className="grid xl:grid-cols-[0.65fr_0.35fr] md:grid-cols-1 gap-10">
        {isLoading ? (
          <>
            <Skeleton className="h-[424px]" />
            <Skeleton className="h-[424px]" />
          </>
        ) : (
          <>
            <AdoptionsInMonthBarChart />
            <AnimalTypesPieChart />
          </>
        )}
      </div>
    </section>
  )
}
