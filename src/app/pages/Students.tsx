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
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h1 className="text-3xl fw-bold text-gray-900">Student Profiles</h1>
          <p className="text-gray-600 mt-1">Manage and view all student information</p>
        </div>
        <button className="btn btn-success d-flex align-items-center gap-2">
          <Plus className="size-5" />
          Add Student
        </button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-3">
          <div className="d-flex flex-wrap gap-3">
            <div className="flex-grow-1">
              <div className="position-relative">
                <Search className="position-absolute start-0 top-50 translate-middle-y size-5 text-muted" />
                <input
                  type="text"
                  placeholder="Search students by name or ID..."
                  className="form-control ps-5"
                />
              </div>
            </div>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <Filter className="size-5" />
              Filter
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Student Grid */}
      <div className="row g-4">
        {students.map((student) => (
          <div key={student.id} className="col-12 col-md-6 col-lg-4">
            <Card className="h-100">
              <CardContent className="p-4">
                {/* Profile Header */}
                <div className="d-flex align-items-start gap-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0 rounded-circle" style={{ width: "60px", height: "60px", background: "linear-gradient(135deg, #10b981, #059669)", fontSize: "1.25rem" }}>
                    {student.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-grow-1" style={{ minWidth: 0 }}>
                    <h3 className="fw-semibold  text-gray-900 text-truncate mb-0">
                      {student.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-0">{student.studentId}</p>
                    <span className="badge bg-secondary mt-1">
                      {student.status}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-0">Major</p>
                    <p className="text-sm fw-medium text-gray-900 mb-0">{student.major}</p>
                  </div>
                  <div className="row g-3">
                    <div className="col-6">
                      <p className="text-xs text-gray-500 mb-0">Year</p>
                      <p className="text-sm fw-medium text-gray-900 mb-0">{student.year}</p>
                    </div>
                    <div className="col-6">
                      <p className="text-xs text-gray-500 mb-0">GPA</p>
                      <p className="text-sm fw-medium text-gray-900 mb-0">{student.gpa}</p>
                    </div>
                  </div>

                  <div className="pt-3 border-top space-y-2">
                    <div className="d-flex align-items-center gap-2 text-sm text-gray-600">
                      <Mail className="size-4 flex-shrink-0" />
                      <span className="text-truncate">{student.email}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-sm text-gray-600">
                      <Phone className="size-4 flex-shrink-0" />
                      <span>{student.phone}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-sm text-gray-600">
                      <MapPin className="size-4 flex-shrink-0" />
                      <span>{student.location}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-3 pt-3 border-top">
                  <button className="w-100 btn btn-sm btn-outline-success">
                    View Full Profile
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}