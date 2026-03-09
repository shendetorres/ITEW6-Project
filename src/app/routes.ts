import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import Schedules from "./pages/Schedules";
import Research from "./pages/Research";
import Instructions from "./pages/Instructions";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "students", Component: Students },
      { path: "faculty", Component: Faculty },
      { path: "events", Component: Events },
      { path: "schedules", Component: Schedules },
      { path: "research", Component: Research },
      { path: "instructions", Component: Instructions },
    ],
  },
]);
