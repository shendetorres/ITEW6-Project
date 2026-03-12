import { ReactNode } from "react";
import { Navigate } from "react-router";

export default function RequireAdmin(props: { children: ReactNode }) {
  const role = localStorage.getItem("ccs_portal_role");
  if (role !== "admin") return <Navigate to="/" replace />;
  return <>{props.children}</>;
}

