
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const weeklyData = [
  { day: "Mon", commuters: 180 },
  { day: "Tue", commuters: 220 },
  { day: "Wed", commuters: 190 },
  { day: "Thu", commuters: 260 },
  { day: "Fri", commuters: 300 },
  { day: "Sat", commuters: 240 },
  { day: "Sun", commuters: 150 },
];

const routeData = [
  { name: "On Time", value: 75 },
  { name: "Delayed", value: 20 },
  { name: "Cancelled", value: 5 },
];

const COLORS = ["#0d9488", "#f59e0b", "#ef4444"];

function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Transport Analytics
        </h2>
        <p className="text-gray-500 mt-2">
          Insights into rural transportation and commuter activity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500">Weekly Commuters</p>
          <h3 className="text-3xl font-bold text-teal-700 mt-2">
            1,540
          </h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500">Route Reliability</p>
          <h3 className="text-3xl font-bold text-green-600 mt-2">
            75%
          </h3>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-gray-500">Total Routes</p>
          <h3 className="text-3xl font-bold text-blue-600 mt-2">
            12
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Weekly Commuter Statistics
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="commuters"
                  fill="#0d9488"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Route Performance
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={routeData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {routeData.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsPage;
