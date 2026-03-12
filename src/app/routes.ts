import { createElement } from "react";
import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Events from "./pages/Events";
import Schedules from "./pages/Schedules";
import Research from "./pages/Research";
import Instructions from "./pages/Instructions";
import Landing from "./pages/Landing";
import RoleLogin from "./pages/RoleLogin";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import RedirectToAdminDashboard from "./pages/RedirectToAdminDashboard";
import RequireAdmin from "./components/RequireAdmin";

const AdminAreaLayout = () =>
  createElement(RequireAdmin, null, createElement(DashboardLayout, null));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/login/:role",
    Component: RoleLogin,
  },
  {
    path: "/student-dashboard",
    Component: StudentDashboard,
  },
  {
    path: "/faculty-dashboard",
    Component: FacultyDashboard,
  },
  {
    path: "/admin-dashboard",
    Component: RedirectToAdminDashboard,
  },
  {
    path: "/dashboard",
    Component: AdminAreaLayout,
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
