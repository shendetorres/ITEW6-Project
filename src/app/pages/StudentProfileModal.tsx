import { X, Mail, Phone, MapPin, BookOpen, Clock, User, DoorOpen, Edit3, Save, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import "../../styles/AddStudentModal.css";

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

interface StudentProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentProfile | null;
}

export default function StudentProfileModal({ isOpen, onClose, student }: StudentProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<StudentProfile>>({});

  // Sync internal state when student changes or modal opens
  useEffect(() => {
    if (student) {
      setFormData(student);
    }
    setIsEditing(false); // Reset to view mode on open
  }, [student, isOpen]);

  if (!isOpen || !student) return null;

  const handleSave = () => {
    console.log("Updated Student Data:", formData);
    // Here you would typically call an update function passed via props
    setIsEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: "800px", border: "none" }}>
        <div className="modal-header d-flex justify-content-between align-items-center bg-white border-bottom p-3">
          <div className="d-flex align-items-center gap-2">
            <div className="bg-success rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px" }}>
              <User className="text-white size-4" />
            </div>
            <h2 className="h5 mb-0 fw-bold text-dark">
              {isEditing ? "Edit Student Profile" : "Student Profile"}
            </h2>
          </div>
          <button className="btn border-0 p-0" onClick={onClose}>
            <X size={24} className="text-muted" />
          </button>
        </div>

        <div className="modal-form p-4" style={{ maxHeight: "75vh", overflowY: "auto", backgroundColor: "#fff" }}>
          
          {/* Section: Personal Info */}
          <div className="mb-5">
            <h3 className="h6 fw-bold text-uppercase mb-3" style={{ color: "#10b981", letterSpacing: "0.5px" }}>
              Academic & Personal Info
            </h3>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="small text-muted mb-1">Full Name</label>
                {isEditing ? (
                  <input name="name" className="form-control" value={formData.name} onChange={handleChange} />
                ) : (
                  <div className="p-2 border-bottom fw-medium text-dark">{student.name}</div>
                )}
              </div>
              <div className="col-md-6">
                <label className="small text-muted mb-1">Student ID</label>
                <div className="p-2 border-bottom fw-medium text-dark bg-light-subtle">{student.studentId}</div>
              </div>
              <div className="col-md-6">
                <label className="small text-muted mb-1">Major / Program</label>
                {isEditing ? (
                  <input name="major" className="form-control" value={formData.major} onChange={handleChange} />
                ) : (
                  <div className="p-2 border-bottom fw-medium text-dark">{student.major}</div>
                )}
              </div>
              <div className="col-md-3">
                <label className="small text-muted mb-1">Year Level</label>
                {isEditing ? (
                  <select name="year" className="form-select" value={formData.year} onChange={handleChange}>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                ) : (
                  <div className="p-2 border-bottom fw-medium text-dark">{student.year}</div>
                )}
              </div>
              <div className="col-md-3">
                <label className="small text-muted mb-1">Status</label>
                {isEditing ? (
                  <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                    <option>Regular</option>
                    <option>Irregular</option>
                  </select>
                ) : (
                  <div className="pt-1">
                    <span className={`badge text-white fw-bold ${student.status === "Regular" ? "bg-success" : "bg-warning"}`}>
                      {student.status}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Section: Contact Details */}
          <div className="mb-5">
            <h3 className="h6 fw-bold text-uppercase mb-3" style={{ color: "#10b981", letterSpacing: "0.5px" }}>
              Contact Details
            </h3>
            <div className="row g-3">
              <div className="col-md-6 d-flex align-items-center gap-3">
                <div className="bg-info-subtle p-2 rounded"><Mail className="text-info size-5" /></div>
                <div className="flex-grow-1">
                  <small className="text-muted d-block">Email Address</small>
                  {isEditing ? (
                    <input name="email" className="form-control form-control-sm" value={formData.email} onChange={handleChange} />
                  ) : (
                    <span className="fw-medium text-dark">{student.email}</span>
                  )}
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center gap-3">
                <div className="bg-success-subtle p-2 rounded"><Phone className="text-success size-5" /></div>
                <div className="flex-grow-1">
                  <small className="text-muted d-block">Phone Number</small>
                  {isEditing ? (
                    <input name="phone" className="form-control form-control-sm" value={formData.phone} onChange={handleChange} />
                  ) : (
                    <span className="fw-medium text-dark">{student.phone}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Subjects Table */}
          <div>
            <h3 className="h6 fw-bold text-uppercase mb-3" style={{ color: "#10b981", letterSpacing: "0.5px" }}>
              Enrolled Subjects
            </h3>
            <div className="table-responsive border rounded shadow-sm">
              <table className="table table-hover mb-0">
                <thead className="bg-light">
                  <tr>
                    <th className="border-0 small fw-bold py-3 px-3">SUBJECT</th>
                    <th className="border-0 small fw-bold py-3 px-3 text-center">HRS</th>
                    <th className="border-0 small fw-bold py-3 px-3">PROFESSOR</th>
                    <th className="border-0 small fw-bold py-3 px-3">ROOM</th>
                  </tr>
                </thead>
                <tbody>
                  {student.subjects.map((sub, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-3 fw-medium text-dark">{sub.name}</td>
                      <td className="py-3 px-3 text-center"><span className="badge bg-light text-dark border">{sub.hours}h</span></td>
                      <td className="py-3 px-3 text-muted">{sub.professor}</td>
                      <td className="py-3 px-3"><span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">{sub.room}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer with Toggle Logic */}
        <div className="modal-footer bg-light p-3 border-top d-flex justify-content-between">
          <button type="button" className="btn btn-link text-muted text-decoration-none px-0" onClick={onClose}>
            Close
          </button>
          
          <div className="d-flex gap-2">
            {isEditing ? (
              <>
                <button className="btn btn-outline-secondary d-flex align-items-center gap-2" onClick={() => setIsEditing(false)}>
                  <RotateCcw size={16} /> Cancel
                </button>
                <button className="btn btn-success d-flex align-items-center gap-2 px-4 shadow-sm" onClick={handleSave}>
                  <Save size={16} /> Save Changes
                </button>
              </>
            ) : (
              <button className="btn btn-success d-flex align-items-center gap-2 px-4 shadow-sm" onClick={() => setIsEditing(true)}>
                <Edit3 size={16} /> Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}