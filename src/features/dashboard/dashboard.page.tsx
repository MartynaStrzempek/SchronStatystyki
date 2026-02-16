import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'

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

const animalsTypeData = [
  { name: 'Psy', value: 68, fill: 'var(--primary)' },
  { name: 'Koty', value: 42, fill: 'var(--secondary)' },
]
// TODO: move charts to separate components and make them generic, so they can be reused in other places (e.g. animals page)
export function DashboardPage() {
  return (
    <section>
      <div>
        <div className="page-title">Dashboard</div>
      </div>
      <div className="grid grid-cols-3 gap-10 mb-10">
        <div>kafelek</div>
        <div>kafelek</div>
        <div>kafelek</div>
      </div>
      <div className="grid grid-cols-[0.65fr_0.35fr] gap-10">
        <div className="bg-white rounded-lg py-10 pr-10">
          <p className="pl-10 pb-8 text-muted-foreground text-xl font-bold">
            Adopcje w poszczególnych miesiącach
          </p>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="dogAdoptions" name="Psy" fill="var(--primary)" radius={4} />
                <Bar dataKey="catAdoptions" name="Koty" fill="var(--secondary)" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-lg py-10 px-10">
          <p className="pb-6 text-muted-foreground text-xl font-bold">Zwierzęta według typu</p>
          <div className="h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={animalsTypeData}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius="50%"
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Tooltip />
                <Legend wrapperStyle={{ paddingTop: 24 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
