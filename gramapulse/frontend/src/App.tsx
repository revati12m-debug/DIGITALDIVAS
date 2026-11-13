
import { useState } from "react";
import Navbar from "./components/Navbar";
import CommuterDashboard from "./pages/CommuterDashboard";
import AnalyticsPage from "./pages/AnalyticsPage";

type Page = "dashboard" | "analytics";

function App() {
  const [activePage, setActivePage] = useState<Page>("dashboard");

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {activePage === "dashboard" ? (
        <CommuterDashboard />
      ) : (
        <AnalyticsPage />
      )}
    </div>
  );
}

export default App;
