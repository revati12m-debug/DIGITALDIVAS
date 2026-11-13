
import { Activity, LayoutDashboard, BarChart3 } from "lucide-react";

type NavbarProps = {
  activePage: "dashboard" | "analytics";
  onNavigate: (page: "dashboard" | "analytics") => void;
};

function Navbar({ activePage, onNavigate }: NavbarProps) {
  return (
    <nav className="bg-white border-b shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-teal-600 text-white p-2 rounded-lg">
          <Activity size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-teal-700">GramaPulse</h1>
          <p className="text-xs text-gray-500">
            Rural Transit Intelligence
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onNavigate("dashboard")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activePage === "dashboard"
              ? "bg-teal-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button
          onClick={() => onNavigate("analytics")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
            activePage === "analytics"
              ? "bg-teal-600 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <BarChart3 size={18} />
          Analytics
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
