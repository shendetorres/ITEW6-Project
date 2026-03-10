import { Calendar, Clock, MapPin, Users, Plus, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Annual Science Fair",
      date: "March 12, 2026",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      category: "Academic",
      attendees: 450,
      description: "Annual showcase of student research and innovation projects",
      status: "Upcoming",
      organizer: "Dr. Maria Garcia",
    },
    {
      id: 2,
      title: "Parent-Teacher Conference",
      date: "March 5, 2026",
      time: "10:00 AM - 4:00 PM",
      location: "Multiple Classrooms",
      category: "Meeting",
      attendees: 320,
      description: "Semester progress discussion with parents and guardians",
      status: "Upcoming",
      organizer: "Administration",
    },
    {
      id: 3,
      title: "Sports Day 2026",
      date: "March 8, 2026",
      time: "8:00 AM - 6:00 PM",
      location: "Sports Complex",
      category: "Sports",
      attendees: 800,
      description: "Inter-departmental sports competition and activities",
      status: "Upcoming",
      organizer: "Sports Committee",
    },
    {
      id: 4,
      title: "Guest Lecture: AI & Future",
      date: "March 15, 2026",
      time: "2:00 PM - 4:00 PM",
      location: "Lecture Hall A",
      category: "Seminar",
      attendees: 200,
      description: "Expert talk on artificial intelligence and its impact",
      status: "Upcoming",
      organizer: "CS Department",
    },
    {
      id: 5,
      title: "Cultural Festival",
      date: "March 20, 2026",
      time: "10:00 AM - 8:00 PM",
      location: "Campus Grounds",
      category: "Cultural",
      attendees: 1200,
      description: "Celebration of diversity with performances and exhibitions",
      status: "Upcoming",
      organizer: "Student Council",
    },
    {
      id: 6,
      title: "Career Fair 2026",
      date: "March 25, 2026",
      time: "11:00 AM - 5:00 PM",
      location: "Exhibition Center",
      category: "Career",
      attendees: 600,
      description: "Meet with top employers and explore career opportunities",
      status: "Upcoming",
      organizer: "Career Services",
    },
  ];

  const categoryColors: Record<string, { bg: string; text: string }> = {
    Academic: { bg: "#d4edda", text: "#155724" },
    Meeting: { bg: "#e0f8f6", text: "#055160" },
    Sports: { bg: "#cfe2ff", text: "#084298" },
    Seminar: { bg: "#fff3cd", text: "#664d03" },
    Cultural: { bg: "#d4edda", text: "#155724" },
    Career: { bg: "#e0f8f6", text: "#055160" },
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="text-3xl fw-bold text-gray-900">Events Calendar</h1>
          <p className="text-gray-600 mt-1">Browse and manage upcoming college events</p>
        </div>
        <button className="btn btn-success d-flex align-items-center gap-2">
          <Plus className="size-5" />
          Create Event
        </button>
      </div>

      {/* Quick Stats */}
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-sm text-gray-600 mb-0">Total Events</p>
                  <p className="text-2xl fw-bold text-gray-900 mb-0">18</p>
                </div>
                <Calendar className="size-8" style={{ color: "#0d6efd" }} />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-sm text-gray-600 mb-0">This Month</p>
                  <p className="text-2xl fw-bold text-gray-900 mb-0">6</p>
                </div>
                <Clock className="size-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-sm text-gray-600 mb-0">Attendees</p>
                  <p className="text-2xl fw-bold text-gray-900 mb-0">3,570</p>
                </div>
                <Users className="size-8 text-info" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <CardContent className="p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <p className="text-sm text-gray-600 mb-0">Categories</p>
                  <p className="text-2xl fw-bold text-gray-900 mb-0">6</p>
                </div>
                <Filter className="size-8" style={{ color: "#0dcaf0" }} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Category Filters */}
      <Card>
        <CardContent className="p-3">
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-dark btn-sm">
              All Events
            </button>
            {Object.keys(categoryColors).map((category) => (
              <button
                key={category}
                className="btn btn-outline-secondary btn-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="row g-4">
        {events.map((event) => (
          <div key={event.id} className="col-12 col-lg-6">
            <Card>
              <CardHeader>
                <div className="d-flex align-items-start justify-content-between">
                  <div className="flex-grow-1">
                    <CardTitle className="fs-5 mb-2">{event.title}</CardTitle>
                    <span className="badge d-inline-block" style={{ backgroundColor: categoryColors[event.category].bg, color: categoryColors[event.category].text }}>
                      {event.category}
                    </span>
                  </div>
                  <span className="badge bg-secondary ms-2">
                    {event.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{event.description}</p>

                <div className="space-y-3">
                  <div className="d-flex align-items-center gap-3 text-sm">
                    <Calendar className="size-4 flex-shrink-0" style={{ color: "#6b7280" }} />
                    <span style={{ color: "#374151" }}>{event.date}</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 text-sm">
                    <Clock className="size-4 flex-shrink-0" style={{ color: "#6b7280" }} />
                    <span style={{ color: "#374151" }}>{event.time}</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 text-sm">
                    <MapPin className="size-4 flex-shrink-0" style={{ color: "#6b7280" }} />
                    <span style={{ color: "#374151" }}>{event.location}</span>
                  </div>
                  <div className="d-flex align-items-center gap-3 text-sm">
                    <Users className="size-4 flex-shrink-0" style={{ color: "#6b7280" }} />
                    <span style={{ color: "#374151" }}>
                      {event.attendees} expected attendees
                    </span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-top">
                  <p className="text-xs text-gray-500 mb-2">
                    Organized by: <span className="fw-medium" style={{ color: "#374151" }}>{event.organizer}</span>
                  </p>
                  <div className="d-flex gap-2">
                    <button className="flex-grow-1 btn btn-sm btn-outline-success">
                      View Details
                    </button>
                    <button className="flex-grow-1 btn btn-sm btn-outline-secondary">
                      Register
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}