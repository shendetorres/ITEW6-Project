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

  const categoryColors: Record<string, string> = {
    Academic: "bg-green-100 text-green-700",
    Meeting: "bg-emerald-100 text-emerald-700",
    Sports: "bg-teal-100 text-teal-700",
    Seminar: "bg-lime-100 text-lime-700",
    Cultural: "bg-green-100 text-green-700",
    Career: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Events Calendar</h1>
          <p className="text-gray-600 mt-1">Browse and manage upcoming college events</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="size-5" />
          Create Event
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Events</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
              <Calendar className="size-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <Clock className="size-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Attendees</p>
                <p className="text-2xl font-bold text-gray-900">3,570</p>
              </div>
              <Users className="size-8 text-emerald-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Categories</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
              <Filter className="size-8 text-teal-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
              All Events
            </button>
            {Object.keys(categoryColors).map((category) => (
              <button
                key={category}
                className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Events List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <Badge className={categoryColors[event.category]}>
                    {event.category}
                  </Badge>
                </div>
                <Badge variant="outline" className="ml-2">
                  {event.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{event.description}</p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="size-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="size-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="size-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{event.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="size-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">
                    {event.attendees} expected attendees
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-3">
                  Organized by: <span className="font-medium text-gray-700">{event.organizer}</span>
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                    View Details
                  </button>
                  <button className="flex-1 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                    Register
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}