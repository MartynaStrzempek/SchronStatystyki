import type { CSSProperties } from 'react'
import { Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from 'recharts'

type PieChartProps<T extends Record<string, unknown>> = {
  data: T[]
  dataKey: keyof T & string
  heightClassName?: string
  innerRadius?: number | string
  outerRadius?: number | string
  cornerRadius?: number | string
  paddingAngle?: number
  isAnimationActive?: boolean
  showLegend?: boolean
  legendWrapperStyle?: CSSProperties
}

export function PieChart<T extends Record<string, unknown>>({
  data,
  dataKey,
  heightClassName = 'h-[300px]',
  innerRadius = '80%',
  outerRadius = '100%',
  cornerRadius = '50%',
  paddingAngle = 5,
  isAnimationActive = true,
  showLegend = true,
  legendWrapperStyle = { paddingTop: 24 },
}: PieChartProps<T>) {
  return (
    <div className={heightClassName}>
      <ResponsiveContainer>
        <RechartsPieChart>
          <Pie
            data={data}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cornerRadius={cornerRadius}
            paddingAngle={paddingAngle}
            dataKey={dataKey}
            isAnimationActive={isAnimationActive}
          />
          <Tooltip />
          {showLegend && <Legend wrapperStyle={legendWrapperStyle} />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </div>
  )
}
