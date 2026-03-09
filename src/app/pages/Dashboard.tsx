import { Users, GraduationCap, Calendar, BookOpen, TrendingUp, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Faculty Members",
      value: "243",
      change: "+3%",
      icon: GraduationCap,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Upcoming Events",
      value: "18",
      change: "+5",
      icon: Calendar,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Active Research",
      value: "67",
      change: "+8%",
      icon: BookOpen,
      color: "from-lime-500 to-lime-600",
    },
  ];

  const recentActivities = [
    { title: "New student enrollment completed", time: "2 hours ago", type: "info" },
    { title: "Faculty meeting scheduled for March 5", time: "5 hours ago", type: "event" },
    { title: "Research paper published", time: "1 day ago", type: "success" },
    { title: "Semester exam schedule updated", time: "2 days ago", type: "warning" },
  ];

  const upcomingEvents = [
    { title: "Parent-Teacher Meeting", date: "March 5, 2026", time: "10:00 AM" },
    { title: "Annual Sports Day", date: "March 8, 2026", time: "8:00 AM" },
    { title: "Science Fair", date: "March 12, 2026", time: "9:00 AM" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className="size-4 text-green-500" />
                      <span className="text-sm text-green-500 font-medium">
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500">vs last month</span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <Icon className="size-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`size-2 rounded-full mt-2 ${
                    activity.type === "success" ? "bg-green-500" :
                    activity.type === "warning" ? "bg-yellow-500" :
                    activity.type === "event" ? "bg-emerald-500" :
                    "bg-teal-500"
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className="flex flex-col items-center justify-center size-14 bg-green-50 rounded-lg flex-shrink-0">
                    <span className="text-lg font-bold text-green-600">
                      {event.date.split(" ")[1].replace(",", "")}
                    </span>
                    <span className="text-xs text-green-600">
                      {event.date.split(" ")[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-center">
              <Users className="size-6 mx-auto mb-2 text-green-600" />
              <span className="text-sm font-medium text-gray-900">Add Student</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:border-emerald-500 hover:bg-emerald-50 transition-colors text-center">
              <GraduationCap className="size-6 mx-auto mb-2 text-emerald-600" />
              <span className="text-sm font-medium text-gray-900">Add Faculty</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition-colors text-center">
              <Calendar className="size-6 mx-auto mb-2 text-teal-600" />
              <span className="text-sm font-medium text-gray-900">Create Event</span>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:border-lime-500 hover:bg-lime-50 transition-colors text-center">
              <BookOpen className="size-6 mx-auto mb-2 text-lime-600" />
              <span className="text-sm font-medium text-gray-900">New Research</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}