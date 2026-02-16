import { BarChart, type BarChartProps } from '@/shared/charts/bar-chart'

type WrappedBarChartProps<T extends Record<string, unknown>> = BarChartProps<T> & {
  title: string
  containerClassName?: string
  titleClassName?: string
}

export function WrappedBarChart<T extends Record<string, unknown>>({
  title,
  containerClassName = 'bg-card rounded-lg py-10 pr-10',
  titleClassName = 'pl-10 pb-8 text-muted-foreground text-xl font-bold',
  ...chartProps
}: WrappedBarChartProps<T>) {
  return (
    <div className={containerClassName}>
      <p className={titleClassName}>{title}</p>
      <BarChart {...chartProps} />
    </div>
  )
}
