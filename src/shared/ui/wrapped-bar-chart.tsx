import { Card } from '@/components/ui/card'
import { BarChart, type BarChartProps } from '@/shared/charts/bar-chart'

type WrappedBarChartProps<T extends Record<string, unknown>> = BarChartProps<T> & {
  title: string
  containerClassName?: string
  titleClassName?: string
}

export function WrappedBarChart<T extends Record<string, unknown>>({
  title,
  titleClassName = 'pl-10 pb-8 text-muted-foreground text-xl font-bold',
  ...chartProps
}: WrappedBarChartProps<T>) {
  return (
    <Card>
      <div className="-ml-10">
        <p className={titleClassName}>{title}</p>
        <BarChart {...chartProps} />
      </div>
    </Card>
  )
}
