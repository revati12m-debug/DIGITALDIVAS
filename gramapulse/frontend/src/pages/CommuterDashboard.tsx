
import {
  Bus,
  MapPin,
  Clock,
  Users,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

function CommuterDashboard() {
  const stats = [
    {
      title: "Active Routes",
      value: "12",
      icon: Bus,
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      title: "Daily Commuters",
      value: "1,240",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Reported Delays",
      value: "04",
      icon: Clock,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      title: "Route Updates",
      value: "08",
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
    },
  ];

  const routes = [
    { name: "Village A - City Center", time: "8:30 AM", status: "On Time" },
    { name: "Village B - Main Bus Stand", time: "9:00 AM", status: "Delayed" },
    { name: "Village C - Railway Station", time: "9:30 AM", status: "On Time" },
    { name: "Village D - College Road", time: "10:00 AM", status: "On Time" },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">
          Commuter Dashboard
        </h2>
        <p className="text-gray-500 mt-2">
          Rural transportation updates and route information.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-3xl font-bold mt-2 text-gray-800">
                    {stat.value}
                  </h3>
                </div>

                <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                  <Icon size={25} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-5">
            Available Bus Routes
          </h3>

          <div className="space-y-4">
            {routes.map((route) => (
              <div
                key={route.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-teal-50 text-teal-600 p-3 rounded-lg">
                    <Bus size={22} />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">
                      {route.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      Departure: {route.time}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-sm px-3 py-1 rounded-full w-fit ${
                    route.status === "On Time"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {route.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-5">
            Transit Information
          </h3>

          <div className="bg-teal-50 rounded-xl p-5">
            <MapPin className="text-teal-600 mb-3" size={28} />
            <h4 className="font-semibold text-gray-800">
              Rural Connectivity
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Stay informed about bus routes, village connectivity and
              transportation updates.
            </p>
          </div>

          <div className="mt-5 bg-orange-50 rounded-xl p-5">
            <AlertTriangle className="text-orange-600 mb-3" size={28} />
            <h4 className="font-semibold text-gray-800">
              Travel Alerts
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Check reported delays and route disruptions before travelling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommuterDashboard;
