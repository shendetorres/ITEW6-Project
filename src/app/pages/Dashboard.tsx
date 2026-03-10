import React, { useState } from "react";
import { Users, GraduationCap, Calendar, BookOpen, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import AddStudent from "./AddStudent";
import AddFaculty from "./AddFaculty";
import CreateEvent from "./CreateEvent";
import AddResearch from "./AddResearch";
import "../../styles/AddStudentModal.css";

interface StudentFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  studentNumber: string;
  collegeProgram: string;
  yearLevel: string;
}

interface FacultyFormData {
  firstName: string;
  lastName: string;
  email: string;
  employeeId: string;
  department: string;
  specialization: string;
  status: string;
}

interface EventFormData {
  eventName: string;
  description: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  eventType: string;
  capacity: string;
}

interface ResearchFormData {
  title: string;
  description: string;
  authors: string;
  researchArea: string;
  status: string;
  startDate: string;
  endDate: string;
}

export default function Dashboard() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showAddFacultyModal, setShowAddFacultyModal] = useState(false);
  const [showCreateEventModal, setShowCreateEventModal] = useState(false);
  const [showAddResearchModal, setShowAddResearchModal] = useState(false);

  const stats = [
    {
      title: "Total Students",
      value: "2,800",
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
      value: "12",
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

  const handleAddFaculty = (data: FacultyFormData) => {
    console.log("New faculty:", data);
    // TODO: Add your API call here to save the faculty
    setShowAddFacultyModal(false);
  };

  const handleCreateEvent = (data: EventFormData) => {
    console.log("New event:", data);
    // TODO: Add your API call here to save the event
    setShowCreateEventModal(false);
  };

  const handleAddResearch = (data: ResearchFormData) => {
    console.log("New research:", data);
    // TODO: Add your API call here to save the research
    setShowAddResearchModal(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900" style={{ letterSpacing: '-0.5px' }}>Dashboard Overview</h1>
        <p className="text-gray-500 mt-2" style={{ fontSize: '0.95rem' }}>Welcome back! Here's what's happening in your institution today.</p>
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
                  <div className="d-flex align-items-center justify-content-between h-100">
                    <div className="flex-grow-1">
                      <p className="text-xs fw-bold text-gray-500 mb-2" style={{ textTransform: 'uppercase', letterSpacing: '0.3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900" style={{ margin: 0 }}>{stat.value}</p>
                    </div>
                    <div className="p-2 rounded-xl d-flex align-items-center justify-content-center text-white ms-3 flex-shrink-0" style={{ background: colorMap[stat.color], width: "60px", height: "60px", boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
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
              <CardTitle style={{ color: '#2c5aa0' }}>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 pb-3" style={{ borderBottom: index !== recentActivities.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
                    <div className={`size-2 rounded-full mt-2 flex-shrink-0 ${
                      activity.type === "success" ? "bg-green-500" :
                      activity.type === "warning" ? "bg-yellow-500" :
                      activity.type === "event" ? "bg-emerald-500" :
                      "bg-teal-500"
                    }`}></div>
                    <div className="flex-grow-1">
                      <p className="text-sm fw-medium text-gray-900 mb-0" style={{ lineHeight: '1.4' }}>{activity.title}</p>
                      <p className="text-xs text-gray-500 mt-1 mb-0">{activity.time}</p>
                    </div>
                    <ArrowUpRight className="size-4 text-gray-300 flex-shrink-0 mt-1" />
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
              <CardTitle style={{ color: '#2c5aa0' }}>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="d-flex align-items-start gap-3 pb-3" style={{ borderBottom: index !== upcomingEvents.length - 1 ? '1px solid #e8e8e8' : 'none' }}>
                    <div className="d-flex flex-column align-items-center justify-content-center rounded p-3 flex-shrink-0" style={{ background: "#f0fdf4", width: "70px", height: "70px", border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <span className="text-lg fw-bold" style={{ color: "#059669" }}>
                        {event.date.split(" ")[1].replace(",", "")}
                      </span>
                      <span className="text-xs fw-medium" style={{ color: "#059669" }}>
                        {event.date.split(" ")[0]}
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-sm fw-medium text-gray-900 mb-0" style={{ lineHeight: '1.4' }}>{event.title}</p>
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
          <CardTitle style={{ color: '#2c5aa0' }}>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <button 
                onClick={() => setShowAddStudentModal(true)}
                className="quick-action-btn quick-action-btn-student"
              >
                <Users className="size-7 mb-2 text-success" />
                <span className="text-sm fw-semibold text-gray-900">Add Student</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button 
                onClick={() => setShowAddFacultyModal(true)}
                className="quick-action-btn quick-action-btn-faculty"
              >
                <GraduationCap className="size-7 mb-2 text-info" />
                <span className="text-sm fw-semibold text-gray-900">Add Faculty</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button 
                onClick={() => setShowCreateEventModal(true)}
                className="quick-action-btn quick-action-btn-event"
              >
                <Calendar className="size-7 mb-2 text-danger" />
                <span className="text-sm fw-semibold text-gray-900">Create Event</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button 
                onClick={() => setShowAddResearchModal(true)}
                className="quick-action-btn quick-action-btn-research"
              >
                <BookOpen className="size-7 mb-2 text-warning" />
                <span className="text-sm fw-semibold text-gray-900">New Research</span>
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

      {/* Add Faculty Modal */}
      <AddFaculty 
        isOpen={showAddFacultyModal}
        onClose={() => setShowAddFacultyModal(false)}
        onSubmit={handleAddFaculty}
      />

      {/* Create Event Modal */}
      <CreateEvent 
        isOpen={showCreateEventModal}
        onClose={() => setShowCreateEventModal(false)}
        onSubmit={handleCreateEvent}
      />

      {/* Add Research Modal */}
      <AddResearch 
        isOpen={showAddResearchModal}
        onClose={() => setShowAddResearchModal(false)}
        onSubmit={handleAddResearch}
      />
    </div>
  );
}