import { Search, Filter, Plus, Mail, Phone, MapPin, ChevronDown, X } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { useState, useRef, useEffect } from "react";
import AddStudent from "./AddStudent";
import StudentProfileModal from "./StudentProfileModal";

interface StudentSubject {
  name: string;
  hours: number;
  professor: string;
  room: string;
}

interface StudentProfile {
  id: number;
  name: string;
  studentId: string;
  major: string;
  year: string;
  gpa: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  subjects: StudentSubject[];
}

interface StudentFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  studentNumber: string;
  collegeProgram: string;
  yearLevel: string;
  status: string;
}

const studentsData: StudentProfile[] = [
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
    status: "Regular",
    subjects: [
      { name: "Data Structures", hours: 4, professor: "Dr. John Smith", room: "A-101" },
      { name: "Web Development", hours: 3, professor: "Prof. Sarah Chen", room: "A-205" },
    ],
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
    status: "Irregular",
    subjects: [
      { name: "Circuit Analysis", hours: 4, professor: "Dr. Robert Wilson", room: "C-102" },
    ],
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
    status: "Regular",
    subjects: [
      { name: "Business Strategy", hours: 3, professor: "Dr. Richard Anderson", room: "E-201" },
    ],
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
    status: "Regular",
    subjects: [
      { name: "Calculus I", hours: 4, professor: "Dr. Catherine Martin", room: "G-101" },
    ],
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
    status: "Regular",
    subjects: [
      { name: "Molecular Biology", hours: 4, professor: "Dr. Susan Lewis", room: "I-201" },
    ],
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
    status: "Irregular",
    subjects: [
      { name: "Classical Mechanics", hours: 4, professor: "Dr. Nancy Young", room: "K-201" },
    ],
  },
];

export default function Students() {
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(null);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterYear, setFilterYear] = useState<string>("");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target as Node)) {
        setShowFilterMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAddStudent = (data: StudentFormData) => {
    console.log("New student recorded:", data);
    setShowAddStudentModal(false);
  };

  const handleViewProfile = (student: StudentProfile) => {
    setSelectedStudent(student);
    setShowProfileModal(true);
  };

  // Logic to handle multiple filters simultaneously
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = 
      searchTerm === "" ||
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.major.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === "" || student.status === filterStatus;
    const matchesYear = filterYear === "" || student.year === filterYear;
    
    return matchesSearch && matchesStatus && matchesYear;
  });

  return (
    <div className="container-fluid p-4 space-y-6">
      {/* Header Section */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h1 className="h2 fw-bold text-gray-900">Student Profiles</h1>
          <p className="text-gray-600">Overview of enrolled students and academic status</p>
        </div>
        <button 
          onClick={() => setShowAddStudentModal(true)}
          className="btn btn-success d-flex align-items-center gap-2 px-4 shadow-sm"
        >
          <Plus size={20} />
          <span>Add Student</span>
        </button>
      </div>

      {/* Filter Toolbar */}
      <Card className="border-0 shadow-sm mb-4 position-relative">
        <CardContent className="p-3">
          <div className="row g-3 align-items-center">
            {/* Search */}
            <div className="col-12 col-md-6 col-lg-8">
              <div className="position-relative">
                <Search className="position-absolute start-0 top-50 translate-middle-y ms-3 text-muted" size={18} />
                <input
                  type="text"
                  placeholder="Search students..."
                  className="form-control ps-5 py-2"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Combined Filter Dropdown */}
            <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-md-end">
              <div className="position-relative w-100" style={{ maxWidth: "220px" }} ref={filterMenuRef}>
                <button 
                  className={`btn w-100 d-flex align-items-center justify-content-between border ${showFilterMenu ? 'btn-success text-white' : 'btn-outline-secondary bg-white'}`}
                  onClick={() => setShowFilterMenu(!showFilterMenu)}
                >
                  <div className="d-flex align-items-center gap-2">
                    <Filter size={18} />
                    <span>Filter Options</span>
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${showFilterMenu ? 'rotate-180' : ''}`} />
                </button>

                {/* Overlap Fix: High z-index and absolute positioning */}
                {showFilterMenu && (
                  <div 
                    className="position-absolute end-0 mt-2 bg-white rounded shadow-lg border p-3" 
                    style={{ minWidth: "280px", zIndex: 1100 }}
                  >
                    <div className="mb-3">
                      <label className="form-label text-xs fw-bold text-uppercase text-muted">Year Level</label>
                      <select 
                        className="form-select form-select-sm"
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                      >
                        <option value="">All Year Levels</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label text-xs fw-bold text-uppercase text-muted">Status</label>
                      <select 
                        className="form-select form-select-sm"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                      >
                        <option value="">All Statuses</option>
                        <option value="Regular">Regular</option>
                        <option value="Irregular">Irregular</option>
                      </select>
                    </div>

                    <div className="d-flex gap-2 border-top pt-2">
                      <button 
                        className="btn btn-sm text-danger p-0"
                        onClick={() => {setFilterYear(""); setFilterStatus("");}}
                      >
                        Reset All
                      </button>
                      <button 
                        className="btn btn-sm btn-success ms-auto px-3"
                        onClick={() => setShowFilterMenu(false)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Active Filter Badges */}
          {(filterYear || filterStatus) && (
            <div className="d-flex flex-wrap gap-2 mt-3 pt-3 border-top">
              {filterYear && (
                <Badge className="bg-success-subtle text-success border-success-subtle px-2 py-1">
                  {filterYear} <X size={14} className="ms-1 cursor-pointer" onClick={() => setFilterYear("")} />
                </Badge>
              )}
              {filterStatus && (
                <Badge className="bg-primary-subtle text-primary border-primary-subtle px-2 py-1">
                  {filterStatus} <X size={14} className="ms-1 cursor-pointer" onClick={() => setFilterStatus("")} />
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Result Grid */}
      <div className="row g-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <div key={student.id} className="col-12 col-md-6 col-lg-4">
              <Card className="h-100 border-0 shadow-sm transition-all hover-shadow">
                <CardContent className="p-4">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div 
                      className="d-flex align-items-center justify-content-center text-white fw-bold flex-shrink-0" 
                      style={{ 
                        width: "56px", 
                        height: "56px", 
                        background: "linear-gradient(135deg, #10b981, #059669)", 
                        borderRadius: "12px",
                        fontSize: "1.2rem"
                      }}
                    >
                      {student.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="overflow-hidden">
                      <h5 className="fw-bold text-dark text-truncate mb-0">{student.name}</h5>
                      <p className="text-muted small mb-2">{student.studentId}</p>
                      <Badge className={student.status === "Regular" ? "bg-success" : "bg-warning text-dark"}>
                        {student.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-12">
                      <span className="text-xs text-muted text-uppercase fw-semibold">Major</span>
                      <div className="text-sm fw-medium">{student.major}</div>
                    </div>
                    <div className="col-6">
                      <span className="text-xs text-muted text-uppercase fw-semibold">Year</span>
                      <div className="text-sm fw-medium">{student.year}</div>
                    </div>
                    <div className="col-6">
                      <span className="text-xs text-muted text-uppercase fw-semibold">GPA</span>
                      <div className="text-sm fw-medium text-success">{student.gpa}</div>
                    </div>
                  </div>

                  <div className="pt-3 border-top">
                    <div className="d-flex align-items-center gap-2 text-sm text-muted mb-2">
                      <Mail size={14} />
                      <span className="text-truncate">{student.email}</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 text-sm text-muted">
                      <Phone size={14} />
                      <span>{student.phone}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleViewProfile(student)}
                    className="btn btn-outline-success w-100 mt-4 py-2"
                  >
                    View Full Profile
                  </button>
                </CardContent>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
             <div className="p-5 bg-light rounded-4">
                <h4 className="text-muted">No students found</h4>
                <p className="text-muted small">Try adjusting your filters or search term.</p>
                <button className="btn btn-sm btn-link" onClick={() => {setSearchTerm(""); setFilterYear(""); setFilterStatus("");}}>
                  Clear all filters
                </button>
             </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <AddStudent 
        isOpen={showAddStudentModal} 
        onClose={() => setShowAddStudentModal(false)} 
        onSubmit={handleAddStudent} 
      />
      <StudentProfileModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
        student={selectedStudent} 
      />
    </div>
  );
}