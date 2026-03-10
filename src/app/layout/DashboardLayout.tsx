import { Outlet, Link, useLocation } from "react-router";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Calendar, 
  Clock, 
  FlaskConical, 
  BookOpen,
  Menu,
  Bell,
  Search,
  Settings
} from "lucide-react";
import { useState } from "react";

export default function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigation = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Students", path: "/students", icon: Users },
    { name: "Faculty", path: "/faculty", icon: GraduationCap },
    { name: "Events", path: "/events", icon: Calendar },
    { name: "Schedules", path: "/schedules", icon: Clock },
    { name: "Research", path: "/research", icon: FlaskConical },
    { name: "Instructions", path: "/instructions", icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="layout-container bg-light">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "sidebar" : "sidebar collapsed"
        }`}
        style={{ width: sidebarOpen ? "250px" : "80px" }}
      >
        {/* Logo */}
        <div className="sidebar-header d-flex justify-content-between align-items-center border-bottom">
          {sidebarOpen && (
            <h1 className="fs-5 fw-bold text-dark mb-0">
              College Portal
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="btn btn-sm btn-light"
          >
            <Menu className="size-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav flex-grow-1 ps-0 ms-0 pt-3 ps-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-nav-link ${
                  active ? "active" : ""
                }`}
              >
                <Icon className="size-5" />
                {sidebarOpen && <span className="text-sm fw-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Settings */}
        <div className="ps-3 border-top">
          <button className="sidebar-nav-link w-100 text-start">
            <Settings className="size-5" />
            {sidebarOpen && <span className="text-sm fw-medium">Settings</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="header h-16 border-bottom d-flex align-items-center justify-content-between px-3">
          {/* Search */}
          <div className="flex-grow-1">
            <div className="position-relative">
              <Search className="position-absolute start-0 top-50 translate-middle-y size-5 text-muted" />
              <input
                type="text"
                placeholder="Search..."
                className="form-control ps-5"
                style={{ maxWidth: "400px" }}
              />
            </div>
          </div>

          {/* Right section */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-light position-relative">
              <Bell className="size-5" style={{ color: "#6b7280" }} />
              <span className="position-absolute top-0 end-0 bg-danger rounded-circle" style={{ width: "8px", height: "8px" }}></span>
            </button>

            <div className="d-flex align-items-center gap-3">
              <div className="bg-gradient-to-br d-flex align-items-center justify-content-center text-white fw-semibold rounded-circle" style={{ width: "36px", height: "36px", background: "linear-gradient(135deg, #10b981, #059669)" }}>
                AD
              </div>
              <div className="text-sm">
                <div className="fw-medium text-dark">Admin User</div>
                <div className="text-xs" style={{ color: "#6b7280" }}>Administrator</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="main-content flex-grow-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}