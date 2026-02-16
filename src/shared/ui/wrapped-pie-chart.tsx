import { PieChart, type PieChartProps } from '@/shared/charts/pie-chart'

type WrappedPieChartProps<T extends Record<string, unknown>> = PieChartProps<T> & {
  title: string
  containerClassName?: string
  titleClassName?: string
}

export function WrappedPieChart<T extends Record<string, unknown>>({
  title,
  containerClassName = 'bg-card rounded-lg py-10 px-10',
  titleClassName = 'pb-6 text-muted-foreground text-xl font-bold',
  ...chartProps
}: WrappedPieChartProps<T>) {
  return (
    <div className={containerClassName}>
      <p className={titleClassName}>{title}</p>
      <PieChart {...chartProps} />
    </div>
  )
}
