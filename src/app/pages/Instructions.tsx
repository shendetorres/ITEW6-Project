import { BookOpen, Download, FileText, Video, HelpCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export default function Instructions() {
  const quickGuides = [
    {
      icon: FileText,
      title: "Student Registration",
      description: "Complete guide for new student enrollment",
      color: "from-green-500 to-green-600",
    },
    {
      icon: BookOpen,
      title: "Course Selection",
      description: "How to choose and register for courses",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Video,
      title: "Online Learning",
      description: "Access and use online learning platforms",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: HelpCircle,
      title: "Support Services",
      description: "Get help from academic advisors",
      color: "from-lime-500 to-lime-600",
    },
  ];

  const faqs = [
    {
      question: "How do I register for classes?",
      answer: "Log in to the student portal, navigate to 'Course Registration', select your desired semester, browse available courses, and click 'Register' for each course you wish to take. Make sure to check prerequisites and time conflicts before registering.",
    },
    {
      question: "What is the process for dropping or adding courses?",
      answer: "You can add or drop courses during the add/drop period at the beginning of each semester. Access the student portal, go to 'My Schedule', and use the 'Add/Drop' feature. Note that dropping courses after the deadline may affect your transcript and financial aid.",
    },
    {
      question: "How can I access my grades and transcripts?",
      answer: "Grades are posted to your student portal at the end of each semester. To access your official transcript, go to 'Academic Records' section and request a transcript. Official transcripts can be sent directly to other institutions or downloaded as unofficial copies.",
    },
    {
      question: "What should I do if I need academic advising?",
      answer: "Schedule an appointment with your academic advisor through the student portal. You can find your advisor's contact information under 'My Advisor' section. Advisors can help with course selection, degree planning, and academic concerns.",
    },
    {
      question: "How do I apply for financial aid or scholarships?",
      answer: "Visit the Financial Aid office or access the online portal to complete the financial aid application. Submit required documents before the deadline. For scholarships, check the 'Scholarships' section for available opportunities and eligibility requirements.",
    },
    {
      question: "What are the library hours and how do I borrow books?",
      answer: "Library hours vary by semester. Check the library website for current hours. To borrow books, use your student ID card. You can search the catalog online, reserve books, and manage your loans through the library portal.",
    },
  ];

  const documents = [
    { name: "Student Handbook 2025-2026", size: "2.4 MB", type: "PDF" },
    { name: "Academic Calendar", size: "450 KB", type: "PDF" },
    { name: "Course Catalog", size: "3.1 MB", type: "PDF" },
    { name: "Registration Guidelines", size: "890 KB", type: "PDF" },
    { name: "Campus Map", size: "1.2 MB", type: "PDF" },
    { name: "Financial Aid Guide", size: "1.8 MB", type: "PDF" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Instructions & Guidelines</h1>
        <p className="text-gray-600 mt-1">
          Find helpful guides, FAQs, and important documents
        </p>
      </div>

      {/* Quick Guides */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickGuides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`size-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${guide.color} flex items-center justify-center`}
                  >
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Create Your Account",
                description: "Register using your student ID and email address",
              },
              {
                step: 2,
                title: "Complete Your Profile",
                description: "Add your personal information and upload a profile photo",
              },
              {
                step: 3,
                title: "Explore the Dashboard",
                description: "Familiarize yourself with the navigation and available features",
              },
              {
                step: 4,
                title: "Register for Courses",
                description: "Browse the course catalog and enroll in your classes",
              },
              {
                step: 5,
                title: "Access Resources",
                description: "Check out the library, online learning tools, and support services",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="size-8 flex-shrink-0 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="flex-1 pt-0.5">
                  <h4 className="font-medium text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <CheckCircle className="size-5 text-green-500 flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Important Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Important Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="size-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{doc.name}</h4>
                    <p className="text-xs text-gray-500">
                      {doc.type} • {doc.size}
                    </p>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  <Download className="size-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Support */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-none">
        <CardContent className="p-6">
          <div className="text-center">
            <HelpCircle className="size-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-900 mb-2">
              Need More Help?
            </h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to assist you with any questions
            </p>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
              Contact Support
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}