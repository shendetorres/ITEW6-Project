import React, { useState } from "react";
import { Users, GraduationCap, Calendar, BookOpen, TrendingUp, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import AddStudent from "./AddStudent";
import "../../styles/AddStudentModal.css";

interface StudentFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  studentNumber: string;
  collegeProgram: string;
  yearLevel: string;
}

export default function Dashboard() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);

  const stats = [
    {
      title: "Total Students",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "success",
    },
    {
      title: "Faculty Members",
      value: "243",
      change: "+3%",
      icon: GraduationCap,
      color: "info",
    },
    {
      title: "Upcoming Events",
      value: "18",
      change: "+5",
      icon: Calendar,
      color: "danger",
    },
    {
      title: "Active Research",
      value: "67",
      change: "+8%",
      icon: BookOpen,
      color: "warning",
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

  const handleAddStudent = (data: StudentFormData) => {
    console.log("New student:", data);
    // TODO: Add your API call here to save the student
    setShowAddStudentModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="row g-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorMap: Record<string, string> = {
            success: "linear-gradient(135deg, #10b981, #059669)",
            info: "linear-gradient(135deg, #06b6d4, #0891b2)",
            danger: "linear-gradient(135deg, #ef4444, #dc2626)",
            warning: "linear-gradient(135deg, #f59e0b, #d97706)"
          };
          return (
            <div key={stat.title} className="col-12 col-md-6 col-lg-3">
              <Card>
                <CardContent className="p-4">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className="d-flex align-items-center gap-1 mt-2">
                        <TrendingUp className="size-4 text-green-500" />
                        <span className="text-sm text-green-500 fw-medium">
                          {stat.change}
                        </span>
                        <span className="text-sm text-gray-500">vs last month</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl d-flex align-items-center justify-content-center text-white" style={{ background: colorMap[stat.color], width: "60px", height: "60px", flexShrink: 0 }}>
                      <Icon className="size-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="row g-4">
        {/* Recent Activities */}
        <div className="col-12 col-lg-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 pb-3 border-bottom">
                    <div className={`size-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === "success" ? "bg-green-500" :
                      activity.type === "warning" ? "bg-yellow-500" :
                      activity.type === "event" ? "bg-emerald-500" :
                      "bg-teal-500"
                    }`}></div>
                    <div className="flex-grow-1">
                      <p className="text-sm fw-medium text-gray-900 mb-0">{activity.title}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-0">{activity.time}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-gray-400 flex-shrink-0" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="col-12 col-lg-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 pb-3 border-bottom">
                    <div className="d-flex flex-column align-items-center justify-content-center rounded p-3 flex-shrink-0" style={{ background: "#f0fdf4", width: "70px", height: "70px" }}>
                      <span className="text-lg fw-bold" style={{ color: "#059669" }}>
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                      <span className="text-xs" style={{ color: "#059669" }}>
                        {event.date.split(" ")[0]}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-sm fw-medium text-gray-900 mb-0">{event.title}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-0">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="row g-3">
            <div className="col-6 col-md-3">
              <button 
                onClick={() => setShowAddStudentModal(true)}
                className="w-100 p-3 border border-gray-200 rounded-lg btn-outline text-center"
              >
                <Users className="size-6 mx-auto mb-2 text-success" />
                <span className="d-block text-sm fw-medium text-gray-900">Add Student</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="w-100 p-3 border border-gray-200 rounded-lg btn-outline text-center">
                <GraduationCap className="size-6 mx-auto mb-2 text-info" />
                <span className="d-block text-sm fw-medium text-gray-900">Add Faculty</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="w-100 p-3 border border-gray-200 rounded-lg btn-outline text-center">
                <Calendar className="size-6 mx-auto mb-2 text-danger" />
                <span className="d-block text-sm fw-medium text-gray-900">Create Event</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="w-100 p-3 border border-gray-200 rounded-lg btn-outline text-center">
                <BookOpen className="size-6 mx-auto mb-2 text-warning" />
                <span className="d-block text-sm fw-medium text-gray-900">New Research</span>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Student Modal */}
      <AddStudent 
        isOpen={showAddStudentModal}
        onClose={() => setShowAddStudentModal(false)}
        onSubmit={handleAddStudent}
      />
    </div>
  );
}