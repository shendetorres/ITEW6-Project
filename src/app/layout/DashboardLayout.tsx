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
import { useState, useEffect } from "react";

interface Notification {
  id: number;
  message: string;
  time: string;
  type: "info" | "success" | "warning" | "error";
}

export default function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "New student enrollment request from John Smith", time: "2 hours ago", type: "info" },
    { id: 2, message: "Faculty meeting scheduled for March 15, 2026", time: "4 hours ago", type: "info" },
    { id: 3, message: "Research project approval completed", time: "1 day ago", type: "success" },
    { id: 4, message: "Upcoming event: Tech Summit 2026", time: "2 days ago", type: "warning" },
  ]);

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

  const getNotificationBgColor = (type: string) => {
    switch (type) {
      case "success":
        return "#f0fdf4";
      case "warning":
        return "#fefce8";
      case "error":
        return "#fef2f2";
      default:
        return "#f0f9ff";
    }
  };

  const getNotificationBorderColor = (type: string) => {
    switch (type) {
      case "success":
        return "#10b981";
      case "warning":
        return "#f59e0b";
      case "error":
        return "#ef4444";
      default:
        return "#06b6d4";
    }
  };

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="layout-container bg-light">
      {/* Sidebar */}
      <aside
        className={`sidebar ${!sidebarOpen ? "collapsed" : ""}`}
      >
        {/* Logo */}
        <div className="sidebar-header d-flex justify-content-between align-items-center" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '1.25rem 1.5rem' }}>
          {sidebarOpen && (
            <h1 className="m-0" style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', letterSpacing: '-0.3px' }}>
              🎓 College Portal
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="btn btn-sm"
            style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#ffffff', padding: '0.5rem', minWidth: '36px', minHeight: '36px' }}
          >
            <Menu className="size-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav flex-grow-1 ps-0 ms-0 pt-2 ps-0">
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
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button className="sidebar-nav-link w-100 text-start" style={{ background: 'none', border: 'none', padding: '1rem 1.5rem', gap: '0.75rem' }}>
            <Settings className="size-6" />
            {sidebarOpen && <span className="text-sm fw-medium">Settings</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="header h-16 border-bottom d-flex align-items-center justify-content-between px-4">
          {/* Search */}
          <div className="flex-grow-1">
            <div className="position-relative">
              <Search className="position-absolute start-3 top-50 translate-middle-y size-5" style={{ color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="Search students, faculty, events..."
                className="form-control ps-5"
                style={{ maxWidth: "400px", backgroundColor: '#ffffff', border: '1px solid #e0e0e0' }}
              />
            </div>
          </div>

          {/* Right section */}
          <div className="d-flex align-items-center gap-4 ms-4">
            <div className="position-relative">
              <button 
                className="btn btn-sm position-relative" 
                style={{ background: 'transparent', border: 'none', padding: '0.5rem', cursor: 'pointer' }}
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <Bell className="size-5" style={{ color: '#6b7280' }} />
                {notifications.length > 0 && (
                  <span className="position-absolute top-0 end-0 bg-danger rounded-circle" style={{ width: "8px", height: "8px", marginRight: '-2px', marginTop: '-2px' }}></span>
                )}
              </button>

              {/* Notification Dropdown */}
              {showNotifications && (
                <div 
                  className="position-absolute end-0 mt-2 bg-white rounded shadow-lg"
                  style={{
                    width: "320px",
                    maxHeight: "400px",
                    overflowY: "auto",
                    zIndex: 1000,
                    border: "1px solid #e0e0e0"
                  }}
                >
                  <div className="p-3 border-bottom" style={{ borderColor: "#e0e0e0" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="m-0 fw-bold text-dark">Notifications</h6>
                      {notifications.length > 0 && (
                        <button 
                          className="btn btn-sm text-secondary p-0"
                          onClick={handleClearNotifications}
                          style={{ fontSize: "0.75rem" }}
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  {notifications.length > 0 ? (
                    <div>
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id}
                          className="p-3 border-bottom"
                          style={{
                            borderColor: "#e0e0e0",
                            backgroundColor: getNotificationBgColor(notification.type),
                            borderLeftWidth: "3px",
                            borderLeftColor: getNotificationBorderColor(notification.type),
                            cursor: "pointer"
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f5f5f5"}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = getNotificationBgColor(notification.type)}
                        >
                          <p className="m-0 text-sm text-dark" style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
                            {notification.message}
                          </p>
                          <small className="text-muted" style={{ fontSize: "0.8rem" }}>
                            {notification.time}
                          </small>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-muted">
                      <p className="m-0" style={{ fontSize: "0.9rem" }}>No notifications</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="d-flex align-items-center gap-3 ps-3" style={{ borderLeft: '1px solid #e0e0e0' }}>
              <div className="d-flex align-items-center justify-content-center text-white fw-semibold rounded-circle" style={{ width: "40px", height: "40px", background: "linear-gradient(135deg, #10b981, #059669)", boxShadow: '0 2px 4px rgba(16, 185, 129, 0.2)' }}>
                AD
              </div>
              <div className="text-sm">
                <div className="fw-semibold text-dark" style={{ fontSize: '0.9rem' }}>Admin User</div>
                <div className="text-xs text-gray-500">Administrator</div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="main-content flex-grow-1 overflow-auto" style={{ padding: '2rem' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}