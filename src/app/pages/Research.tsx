import { Search, Filter, Plus, TrendingUp, Users, FileText, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function Research() {
  const researchProjects = [
    {
      id: 1,
      title: "Machine Learning Applications in Healthcare",
      lead: "Dr. Robert Anderson",
      department: "Computer Science",
      status: "Active",
      funding: "$125,000",
      startDate: "Jan 2025",
      team: 8,
      publications: 3,
      description: "Developing AI algorithms to predict patient outcomes and improve diagnostic accuracy",
      tags: ["AI", "Healthcare", "Deep Learning"],
    },
    {
      id: 2,
      title: "Sustainable Energy Systems",
      lead: "Dr. Patricia Williams",
      department: "Engineering",
      status: "Active",
      funding: "$200,000",
      startDate: "Sep 2024",
      team: 12,
      publications: 5,
      description: "Research on renewable energy integration and optimization of power systems",
      tags: ["Energy", "Sustainability", "Engineering"],
    },
    {
      id: 3,
      title: "Quantum Computing Algorithms",
      lead: "Dr. David Kim",
      department: "Physics",
      status: "Active",
      funding: "$180,000",
      startDate: "Mar 2024",
      team: 6,
      publications: 4,
      description: "Developing new quantum algorithms for complex computational problems",
      tags: ["Quantum", "Computing", "Physics"],
    },
    {
      id: 4,
      title: "Genomic Medicine and Personalized Treatment",
      lead: "Dr. Maria Garcia",
      department: "Biology",
      status: "Active",
      funding: "$150,000",
      startDate: "Jun 2024",
      team: 10,
      publications: 7,
      description: "Studying genetic variations to develop personalized medical treatments",
      tags: ["Genomics", "Medicine", "Biotechnology"],
    },
    {
      id: 5,
      title: "Financial Market Prediction Models",
      lead: "Dr. Lisa Brown",
      department: "Business",
      status: "Review",
      funding: "$95,000",
      startDate: "Nov 2024",
      team: 5,
      publications: 2,
      description: "Creating advanced models for financial forecasting and risk assessment",
      tags: ["Finance", "Economics", "Data Science"],
    },
    {
      id: 6,
      title: "Applied Mathematics in Climate Modeling",
      lead: "Dr. James Mitchell",
      department: "Mathematics",
      status: "Active",
      funding: "$110,000",
      startDate: "Aug 2024",
      team: 7,
      publications: 4,
      description: "Using mathematical models to predict climate patterns and environmental changes",
      tags: ["Mathematics", "Climate", "Modeling"],
    },
  ];

  const stats = [
    { label: "Active Projects", value: "67", icon: TrendingUp, color: "text-green-600" },
    { label: "Researchers", value: "156", icon: Users, color: "text-emerald-600" },
    { label: "Publications", value: "243", icon: FileText, color: "text-teal-600" },
    { label: "Grants", value: "$2.4M", icon: Award, color: "text-lime-600" },
  ];

  const statusColors: Record<string, string> = {
    Active: "bg-green-100 text-green-700",
    Review: "bg-yellow-100 text-yellow-700",
    Completed: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">College Research</h1>
          <p className="text-gray-600 mt-1">Explore ongoing research projects and publications</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <Plus className="size-5" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <Icon className={`size-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
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
                  placeholder="Search research projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="size-5" />
              Filter by Department
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Research Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {researchProjects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-lg leading-tight flex-1">
                  {project.title}
                </CardTitle>
                <Badge className={statusColors[project.status]}>
                  {project.status}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">{project.lead}</span>
                <span>•</span>
                <span>{project.department}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-gray-500">Funding</p>
                  <p className="text-sm font-semibold text-gray-900">{project.funding}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Start Date</p>
                  <p className="text-sm font-semibold text-gray-900">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Team Size</p>
                  <p className="text-sm font-semibold text-gray-900">{project.team} members</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Publications</p>
                  <p className="text-sm font-semibold text-gray-900">{project.publications}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 text-sm font-medium text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  View Details
                </button>
                <button className="flex-1 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Publications
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Publications */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Publications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { title: "Advances in Neural Network Architectures", journal: "Nature Machine Intelligence", date: "Feb 2026" },
              { title: "Renewable Energy Grid Optimization", journal: "IEEE Transactions on Power Systems", date: "Jan 2026" },
              { title: "Quantum Algorithm for Cryptography", journal: "Physical Review Letters", date: "Jan 2026" },
              { title: "CRISPR Gene Editing Applications", journal: "Cell", date: "Dec 2025" },
            ].map((pub, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileText className="size-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm text-gray-900 mb-1">{pub.title}</h4>
                  <p className="text-xs text-gray-600">
                    {pub.journal} • {pub.date}
                  </p>
                </div>
                <button className="text-xs font-medium text-green-600 hover:underline flex-shrink-0">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}