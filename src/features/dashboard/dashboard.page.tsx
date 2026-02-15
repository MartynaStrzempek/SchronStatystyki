import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const chartData = [
  { month: 'Jan', adoptions: 8 },
  { month: 'Feb', adoptions: 11 },
  { month: 'Mar', adoptions: 7 },
  { month: 'Apr', adoptions: 14 },
  { month: 'May', adoptions: 10 },
]

export function DashboardPage() {
  return (
    <section>
      <h1>Dashboard</h1>
      <div>
        <div>kafelek</div>
        <div>kafelek</div>
        <div>kafelek</div>
      </div>
      <div>
        <div className="w-full h-[300px]">
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="adoptions" fill="var(--primary)" radius={4} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>wykres</div>
        <div>wykres</div>
      </div>
    </section>
  )
}
