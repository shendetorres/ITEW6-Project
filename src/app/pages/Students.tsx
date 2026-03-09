import { Search, Filter, Plus, Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useUnsplashImage } from "../hooks/useUnsplashImage";

export default function Students() {
  const students = [
    {
      id: 1,
      name: "Emma Thompson",
      studentId: "STU2024001",
      major: "Computer Science",
      year: "3rd Year",
      gpa: "3.85",
      email: "emma.thompson@college.edu",
      phone: "+1 (555) 123-4567",
      location: "Building A, Room 201",
      status: "Active",
    },
    {
      id: 2,
      name: "Michael Chen",
      studentId: "STU2024002",
      major: "Engineering",
      year: "2nd Year",
      gpa: "3.72",
      email: "michael.chen@college.edu",
      phone: "+1 (555) 234-5678",
      location: "Building B, Room 305",
      status: "Active",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      studentId: "STU2024003",
      major: "Business Administration",
      year: "4th Year",
      gpa: "3.95",
      email: "sarah.johnson@college.edu",
      phone: "+1 (555) 345-6789",
      location: "Building C, Room 102",
      status: "Active",
    },
    {
      id: 4,
      name: "James Wilson",
      studentId: "STU2024004",
      major: "Mathematics",
      year: "1st Year",
      gpa: "3.68",
      email: "james.wilson@college.edu",
      phone: "+1 (555) 456-7890",
      location: "Building A, Room 150",
      status: "Active",
    },
    {
      id: 5,
      name: "Olivia Martinez",
      studentId: "STU2024005",
      major: "Biology",
      year: "3rd Year",
      gpa: "3.91",
      email: "olivia.martinez@college.edu",
      phone: "+1 (555) 567-8901",
      location: "Building D, Room 220",
      status: "Active",
    },
    {
      id: 6,
      name: "David Lee",
      studentId: "STU2024006",
      major: "Physics",
      year: "2nd Year",
      gpa: "3.78",
      email: "david.lee@college.edu",
      phone: "+1 (555) 678-9012",
      location: "Building B, Room 401",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Student Profiles</h1>
          <p className="text-gray-600 mt-1">Manage and view all student information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="size-5" />
          Add Student
        </button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students by name or ID..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="size-5" />
              Filter
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Student Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="size-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {student.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-gray-900 truncate">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-500">{student.studentId}</p>
                  <Badge variant="secondary" className="mt-1">
                    {student.status}
                  </Badge>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500">Major</p>
                  <p className="text-sm font-medium text-gray-900">{student.major}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-gray-500">Year</p>
                    <p className="text-sm font-medium text-gray-900">{student.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">GPA</p>
                    <p className="text-sm font-medium text-gray-900">{student.gpa}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="size-4 flex-shrink-0" />
                    <span className="truncate">{student.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="size-4 flex-shrink-0" />
                    <span>{student.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="size-4 flex-shrink-0" />
                    <span>{student.location}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  View Full Profile
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}