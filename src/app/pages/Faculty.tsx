import { Search, Filter, Plus, Mail, Phone, Award, BookOpen } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Faculty() {
  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Robert Anderson",
      employeeId: "FAC2020015",
      department: "Computer Science",
      position: "Professor",
      specialization: "Artificial Intelligence",
      yearsOfExperience: 15,
      email: "r.anderson@college.edu",
      phone: "+1 (555) 111-2222",
      publications: 42,
      courses: ["AI Fundamentals", "Machine Learning", "Deep Learning"],
      officeHours: "Mon, Wed 2-4 PM",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Patricia Williams",
      employeeId: "FAC2019008",
      department: "Engineering",
      position: "Associate Professor",
      specialization: "Mechanical Engineering",
      yearsOfExperience: 12,
      email: "p.williams@college.edu",
      phone: "+1 (555) 222-3333",
      publications: 28,
      courses: ["Thermodynamics", "Fluid Mechanics", "Engineering Design"],
      officeHours: "Tue, Thu 1-3 PM",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. James Mitchell",
      employeeId: "FAC2021022",
      department: "Mathematics",
      position: "Assistant Professor",
      specialization: "Applied Mathematics",
      yearsOfExperience: 8,
      email: "j.mitchell@college.edu",
      phone: "+1 (555) 333-4444",
      publications: 18,
      courses: ["Calculus I", "Linear Algebra", "Differential Equations"],
      officeHours: "Wed, Fri 10-12 PM",
      status: "Active",
    },
    {
      id: 4,
      name: "Dr. Maria Garcia",
      employeeId: "FAC2018005",
      department: "Biology",
      position: "Professor",
      specialization: "Molecular Biology",
      yearsOfExperience: 18,
      email: "m.garcia@college.edu",
      phone: "+1 (555) 444-5555",
      publications: 56,
      courses: ["Cell Biology", "Genetics", "Biochemistry"],
      officeHours: "Mon, Thu 3-5 PM",
      status: "Active",
    },
    {
      id: 5,
      name: "Dr. David Kim",
      employeeId: "FAC2020018",
      department: "Physics",
      position: "Associate Professor",
      specialization: "Quantum Physics",
      yearsOfExperience: 10,
      email: "d.kim@college.edu",
      phone: "+1 (555) 555-6666",
      publications: 31,
      courses: ["Quantum Mechanics", "Modern Physics", "Electromagnetism"],
      officeHours: "Tue, Fri 2-4 PM",
      status: "Active",
    },
    {
      id: 6,
      name: "Dr. Lisa Brown",
      employeeId: "FAC2017003",
      department: "Business",
      position: "Professor",
      specialization: "Finance & Economics",
      yearsOfExperience: 20,
      email: "l.brown@college.edu",
      phone: "+1 (555) 666-7777",
      publications: 64,
      courses: ["Corporate Finance", "Economics", "Financial Analysis"],
      officeHours: "Mon, Wed 1-3 PM",
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faculty Profiles</h1>
          <p className="text-gray-600 mt-1">View and manage faculty member information</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
          <Plus className="size-5" />
          Add Faculty
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
                  placeholder="Search faculty by name or department..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {facultyMembers.map((faculty) => (
          <Card key={faculty.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              {/* Profile Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="size-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {faculty.name.split(" ").filter(n => n.startsWith("Dr.") === false).map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900">
                    {faculty.name}
                  </h3>
                  <p className="text-sm text-gray-500">{faculty.employeeId}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary">{faculty.position}</Badge>
                    <Badge variant="outline">{faculty.status}</Badge>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Department</p>
                  <p className="text-sm font-medium text-gray-900">{faculty.department}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Specialization</p>
                  <p className="text-sm font-medium text-gray-900">{faculty.specialization}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="text-sm font-medium text-gray-900">{faculty.yearsOfExperience} years</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Publications</p>
                  <p className="text-sm font-medium text-gray-900">{faculty.publications}</p>
                </div>
              </div>

              {/* Courses */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="size-4 text-gray-500" />
                  <p className="text-xs text-gray-500">Current Courses</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {faculty.courses.map((course, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact & Office Hours */}
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="size-4 flex-shrink-0" />
                  <span className="truncate">{faculty.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="size-4 flex-shrink-0" />
                  <span>{faculty.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award className="size-4 flex-shrink-0" />
                  <span>Office Hours: {faculty.officeHours}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button className="flex-1 py-2 text-sm font-medium text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                  View Profile
                </button>
                <button className="flex-1 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Schedule Meeting
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}