import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type BarSeries<T> = {
  dataKey: keyof T & string
  name: string
  fill: string
  radius?: number | [number, number, number, number]
}

type BarChartProps<T extends Record<string, unknown>> = {
  data: T[]
  xDataKey: keyof T & string
  series: BarSeries<T>[]
  heightClassName?: string
  gridStrokeDasharray?: string
}

export function BarChart<T extends Record<string, unknown>>({
  data,
  xDataKey,
  series,
  heightClassName = 'h-[300px]',
  gridStrokeDasharray = '3 3',
}: BarChartProps<T>) {
  return (
    <div className={heightClassName}>
      <ResponsiveContainer>
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray={gridStrokeDasharray} />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          {series.map((item) => (
            <Bar
              key={item.dataKey}
              dataKey={item.dataKey}
              name={item.name}
              fill={item.fill}
              radius={item.radius ?? 4}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}
