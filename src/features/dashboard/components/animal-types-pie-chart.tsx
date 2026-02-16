import { WrappedPieChart } from '@/shared/ui/wrapped-pie-chart'

const animalsTypeData = [
  { name: 'Psy', value: 68, fill: 'var(--primary)' },
  { name: 'Koty', value: 42, fill: 'var(--secondary)' },
]

export function AnimalTypesPieChart() {
  return <WrappedPieChart title="Zwierzęta według typu" data={animalsTypeData} dataKey="value" />
}
