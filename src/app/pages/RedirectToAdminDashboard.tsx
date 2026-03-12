import { Navigate } from "react-router";

export default function RedirectToAdminDashboard() {
  const role = localStorage.getItem("ccs_portal_role");
  if (role !== "admin") return <Navigate to="/" replace />;
  return <Navigate to="/dashboard" replace />;
}

