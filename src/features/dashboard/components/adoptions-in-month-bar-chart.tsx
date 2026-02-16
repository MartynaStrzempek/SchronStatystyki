import { WrappedBarChart } from '@/shared/ui/wrapped-bar-chart'

const chartData = [
  { month: 'Jan', dogAdoptions: 8, catAdoptions: 5 },
  { month: 'Feb', dogAdoptions: 11, catAdoptions: 3 },
  { month: 'Mar', dogAdoptions: 7, catAdoptions: 4 },
  { month: 'Apr', dogAdoptions: 14, catAdoptions: 6 },
  { month: 'May', dogAdoptions: 10, catAdoptions: 5 },
  { month: 'Jun', dogAdoptions: 10, catAdoptions: 5 },
  { month: 'Jul', dogAdoptions: 10, catAdoptions: 4 },
  { month: 'Aug', dogAdoptions: 2, catAdoptions: 3 },
  { month: 'Sep', dogAdoptions: 12, catAdoptions: 5 },
  { month: 'Oct', dogAdoptions: 8, catAdoptions: 4 },
  { month: 'Nov', dogAdoptions: 7, catAdoptions: 3 },
  { month: 'Dec', dogAdoptions: 6, catAdoptions: 2 },
]

export function AdoptionsInMonthBarChart() {
  return (
    <WrappedBarChart
      title="Adopcje w poszczególnych miesiącach"
      data={chartData}
      xDataKey="month"
      series={[
        { dataKey: 'dogAdoptions', name: 'Psy', fill: 'var(--primary)' },
        { dataKey: 'catAdoptions', name: 'Koty', fill: 'var(--secondary)' },
      ]}
    />
  )
}
