import { Clock, Calendar, MapPin, User, Filter, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Schedules() {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  const schedule = {
    Monday: [
      { time: "9:00 AM", title: "Computer Science 101", instructor: "Dr. Robert Anderson", room: "Lab A-301", type: "Lecture" },
      { time: "11:00 AM", title: "Mathematics", instructor: "Dr. James Mitchell", room: "Room B-205", type: "Lecture" },
      { time: "2:00 PM", title: "Physics Lab", instructor: "Dr. David Kim", room: "Lab C-102", type: "Lab" },
    ],
    Tuesday: [
      { time: "10:00 AM", title: "Engineering Design", instructor: "Dr. Patricia Williams", room: "Room A-410", type: "Lecture" },
      { time: "1:00 PM", title: "Biology", instructor: "Dr. Maria Garcia", room: "Lab D-201", type: "Lab" },
      { time: "3:00 PM", title: "Business Finance", instructor: "Dr. Lisa Brown", room: "Room B-305", type: "Lecture" },
    ],
    Wednesday: [
      { time: "9:00 AM", title: "Machine Learning", instructor: "Dr. Robert Anderson", room: "Lab A-301", type: "Lecture" },
      { time: "11:00 AM", title: "Differential Equations", instructor: "Dr. James Mitchell", room: "Room B-205", type: "Lecture" },
      { time: "2:00 PM", title: "Quantum Mechanics", instructor: "Dr. David Kim", room: "Room C-405", type: "Lecture" },
    ],
    Thursday: [
      { time: "10:00 AM", title: "Thermodynamics", instructor: "Dr. Patricia Williams", room: "Room A-410", type: "Lecture" },
      { time: "1:00 PM", title: "Genetics", instructor: "Dr. Maria Garcia", room: "Lab D-201", type: "Lab" },
      { time: "3:00 PM", title: "Economics", instructor: "Dr. Lisa Brown", room: "Room B-305", type: "Lecture" },
    ],
    Friday: [
      { time: "9:00 AM", title: "Deep Learning", instructor: "Dr. Robert Anderson", room: "Lab A-301", type: "Lecture" },
      { time: "11:00 AM", title: "Linear Algebra", instructor: "Dr. James Mitchell", room: "Room B-205", type: "Lecture" },
      { time: "2:00 PM", title: "Modern Physics", instructor: "Dr. David Kim", room: "Lab C-102", type: "Lab" },
    ],
  };

  const examSchedule = [
    { date: "March 15, 2026", course: "Computer Science 101", time: "9:00 AM - 12:00 PM", venue: "Exam Hall A" },
    { date: "March 17, 2026", course: "Mathematics", time: "2:00 PM - 5:00 PM", venue: "Exam Hall B" },
    { date: "March 20, 2026", course: "Physics", time: "9:00 AM - 12:00 PM", venue: "Exam Hall C" },
    { date: "March 22, 2026", course: "Engineering Design", time: "2:00 PM - 5:00 PM", venue: "Exam Hall A" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Class Schedules</h1>
          <p className="text-gray-600 mt-1">View weekly class schedule and upcoming exams</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="size-5" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Download className="size-5" />
            Export
          </button>
        </div>
      </div>

      {/* Current Week Info */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="size-5 text-green-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Current Week</p>
                <p className="text-xs text-gray-600">March 2 - March 6, 2026</p>
              </div>
            </div>
            <Badge>Spring Semester</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Class Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weekDays.map((day) => (
              <div key={day} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">{day}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {schedule[day as keyof typeof schedule].map((classItem, index) => (
                    <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center px-3 py-2 bg-green-50 rounded-lg flex-shrink-0">
                          <Clock className="size-4 text-green-600 mr-2" />
                          <span className="text-sm font-medium text-green-600">
                            {classItem.time}
                          </span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-medium text-gray-900">{classItem.title}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <User className="size-3 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  {classItem.instructor}
                                </span>
                              </div>
                            </div>
                            <Badge
                              variant={classItem.type === "Lab" ? "default" : "secondary"}
                            >
                              {classItem.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="size-3" />
                            <span>{classItem.room}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Exam Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Examinations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {examSchedule.map((exam, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
              >
                <div className="flex flex-col items-center justify-center size-16 bg-red-50 rounded-lg flex-shrink-0">
                  <span className="text-lg font-bold text-red-600">
                    {exam.date.split(" ")[1].replace(",", "")}
                  </span>
                  <span className="text-xs text-red-600">
                    {exam.date.split(" ")[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 mb-1">{exam.course}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="size-3" />
                      <span>{exam.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="size-3" />
                      <span>{exam.venue}</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-100 rounded-lg transition-colors">
                  Details
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}